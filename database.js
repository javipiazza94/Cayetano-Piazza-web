import { createClient } from "@libsql/client";

// Utiliza la URL local si es desarrollo, o la nube Turso si está subido a Vercel
const client = createClient({
  url: process.env.TURSO_DATABASE_URL || "file:promoter.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

let dbReady = null;

async function initializeDatabase() {
  try {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS bands (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        tributeTo TEXT NOT NULL,
        description TEXT,
        imageUrl TEXT,
        videoUrl TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await client.execute(`
      CREATE TABLE IF NOT EXISTS venues (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        location TEXT NOT NULL,
        capacity INTEGER,
        contactEmail TEXT,
        imageUrl TEXT,
        videoUrl TEXT,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await client.execute(`
      CREATE TABLE IF NOT EXISTS concerts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        band_id INTEGER,
        venue_id INTEGER,
        date TEXT NOT NULL,
        ticketUrl TEXT,
        videoUrl TEXT,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (band_id) REFERENCES bands (id),
        FOREIGN KEY (venue_id) REFERENCES venues (id)
      )
    `);

    await client.execute(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        senderName TEXT NOT NULL,
        senderEmail TEXT NOT NULL,
        message TEXT NOT NULL,
        type TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database schema ensured.');

    // Migrations for existing databases that were created before these columns existed
    const migrations = [
      `ALTER TABLE venues ADD COLUMN imageUrl TEXT`,
      `ALTER TABLE venues ADD COLUMN videoUrl TEXT`,
      `ALTER TABLE venues ADD COLUMN description TEXT`,
      `ALTER TABLE bands ADD COLUMN videoUrl TEXT`,
      `ALTER TABLE concerts ADD COLUMN videoUrl TEXT`,
      `ALTER TABLE concerts ADD COLUMN description TEXT`,
    ];
    for (const sql of migrations) {
      try { await client.execute(sql); } catch (e) { /* column already exists */ }
    }
    console.log('Migrations checked.');
  } catch (error) {
    console.error('Failed to initialize database schema', error);
  }
}

/**
 * Ensures the database is initialized before any query.
 * Call `await ensureDb()` at the start of every API handler.
 */
async function ensureDb() {
  if (!dbReady) {
    dbReady = initializeDatabase();
  }
  await dbReady;
}

// Kick off initialization eagerly (but API handlers also await it)
ensureDb();

export { client, ensureDb };
