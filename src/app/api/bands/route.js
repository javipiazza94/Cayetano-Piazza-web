import { NextResponse } from 'next/server';
import { client } from '../../../../database';

export const dynamic = 'force-dynamic';

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
        const { name, tributeTo, description, imageUrl, videoUrl } = await request.json();
        const result = await client.execute({
            sql: 'INSERT INTO bands (name, tributeTo, description, imageUrl, videoUrl) VALUES (?, ?, ?, ?, ?)',
            args: [name, tributeTo, description, imageUrl || null, videoUrl || null]
        });

        return NextResponse.json({ id: result.lastInsertRowid?.toString(), success: true }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create band' }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const { id, name, tributeTo, description, imageUrl, videoUrl } = await request.json();
        await client.execute({
            sql: 'UPDATE bands SET name = ?, tributeTo = ?, description = ?, imageUrl = ?, videoUrl = ? WHERE id = ?',
            args: [name, tributeTo, description, imageUrl || null, videoUrl || null, id]
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update band' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        await client.execute({
            sql: 'DELETE FROM bands WHERE id = ?',
            args: [id]
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete band' }, { status: 500 });
    }
}
