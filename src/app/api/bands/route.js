import { NextResponse } from 'next/server';
import { client } from '../../../../database';

export async function GET() {
    try {
        const { rows } = await client.execute('SELECT * FROM bands');
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch bands' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { name, tributeTo, description, imageUrl } = await request.json();
        const result = await client.execute({
            sql: 'INSERT INTO bands (name, tributeTo, description, imageUrl) VALUES (?, ?, ?, ?)',
            args: [name, tributeTo, description, imageUrl || null]
        });

        return NextResponse.json({ id: result.lastInsertRowid?.toString(), success: true }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create band' }, { status: 500 });
    }
}
