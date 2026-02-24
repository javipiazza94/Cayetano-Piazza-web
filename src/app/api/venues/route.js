import { NextResponse } from 'next/server';
import { client } from '../../../../database';

export const dynamic = 'force-dynamic';

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
        const { name, location, capacity, contactEmail, imageUrl, videoUrl, description } = await request.json();
        const result = await client.execute({
            sql: 'INSERT INTO venues (name, location, capacity, contactEmail, imageUrl, videoUrl, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
            args: [name, location, capacity || null, contactEmail || null, imageUrl || null, videoUrl || null, description || null]
        });

        return NextResponse.json({ id: result.lastInsertRowid?.toString(), success: true }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create venue' }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const { id, name, location, capacity, contactEmail, imageUrl, videoUrl, description } = await request.json();
        await client.execute({
            sql: 'UPDATE venues SET name = ?, location = ?, capacity = ?, contactEmail = ?, imageUrl = ?, videoUrl = ?, description = ? WHERE id = ?',
            args: [name, location, capacity || null, contactEmail || null, imageUrl || null, videoUrl || null, description || null, id]
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update venue' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        await client.execute({
            sql: 'DELETE FROM venues WHERE id = ?',
            args: [id]
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete venue' }, { status: 500 });
    }
}
