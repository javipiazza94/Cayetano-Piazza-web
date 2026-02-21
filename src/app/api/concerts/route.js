import { NextResponse } from 'next/server';
import { client } from '../../../../database';

export async function GET() {
    try {
        const query = `
      SELECT concerts.*, bands.name as bandName, bands.imageUrl as bandImage, venues.name as venueName, venues.location
      FROM concerts
      JOIN bands ON concerts.band_id = bands.id
      JOIN venues ON concerts.venue_id = venues.id
      ORDER BY concerts.date ASC
    `;
        const { rows } = await client.execute(query);
        return NextResponse.json(rows);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch concerts' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { band_id, venue_id, date, ticketUrl } = await request.json();
        const result = await client.execute({
            sql: 'INSERT INTO concerts (band_id, venue_id, date, ticketUrl) VALUES (?, ?, ?, ?)',
            args: [band_id, venue_id, date, ticketUrl || null]
        });

        return NextResponse.json({ id: result.lastInsertRowid?.toString(), success: true }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create concert' }, { status: 500 });
    }
}
