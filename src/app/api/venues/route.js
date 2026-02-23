import { NextResponse } from 'next/server';
import { client } from '../../../../database';

export async function GET() {
    try {
        const { rows } = await client.execute('SELECT * FROM venues');
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch venues' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { name, location, capacity, contactEmail, imageUrl } = await request.json();
        const result = await client.execute({
            sql: 'INSERT INTO venues (name, location, capacity, contactEmail, imageUrl) VALUES (?, ?, ?, ?, ?)',
            args: [name, location, capacity || null, contactEmail || null, imageUrl || null]
        });

        return NextResponse.json({ id: result.lastInsertRowid?.toString(), success: true }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create venue' }, { status: 500 });
    }
}
