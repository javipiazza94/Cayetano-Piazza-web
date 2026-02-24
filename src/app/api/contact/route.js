import { NextResponse } from 'next/server';
import { client } from '../../../../database';
import { requireAuth } from '../../lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const { senderName, senderEmail, message, type, website } = await request.json();

        // Honeypot check: if filled, it's a bot
        if (website) {
            return NextResponse.json({ success: true }, { status: 201 }); // Silent success to not alert the bot
        }

        if (!senderName || !senderEmail || !message) {
            return NextResponse.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
        }

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

export async function DELETE(request) {
    const authError = requireAuth(request);
    if (authError) return authError;

    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        await client.execute({
            sql: 'DELETE FROM messages WHERE id = ?',
            args: [id]
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
    }
}
