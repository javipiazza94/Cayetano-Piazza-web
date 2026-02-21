import { NextResponse } from 'next/server';
import { client } from '../../../../database';

export async function POST(request) {
    try {
        const { senderName, senderEmail, message, type } = await request.json();
        const result = await client.execute({
            sql: 'INSERT INTO messages (senderName, senderEmail, message, type) VALUES (?, ?, ?, ?)',
            args: [senderName, senderEmail, message, type]
        });

        return NextResponse.json({ id: result.lastInsertRowid?.toString(), success: true }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const { rows } = await client.execute('SELECT * FROM messages ORDER BY created_at DESC');
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
    }
}
