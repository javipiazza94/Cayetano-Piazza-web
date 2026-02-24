import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

// In-memory token store (resets on server restart, which is fine for a single-admin app)
const validTokens = new Set();

export function getValidTokens() {
    return validTokens;
}

export async function POST(request) {
    try {
        const { password } = await request.json();
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminPassword) {
            return NextResponse.json(
                { error: 'Autenticación no configurada en el servidor.' },
                { status: 503 }
            );
        }

        if (password !== adminPassword) {
            return NextResponse.json(
                { error: 'Contraseña incorrecta.' },
                { status: 401 }
            );
        }

        const token = crypto.randomUUID();
        validTokens.add(token);

        const response = NextResponse.json({ success: true });

        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 8, // 8 hours
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: 'Error en el servidor.' }, { status: 500 });
    }
}

// DELETE = Logout
export async function DELETE(request) {
    const token = request.cookies.get('admin_token')?.value;
    if (token) validTokens.delete(token);

    const response = NextResponse.json({ success: true });
    response.cookies.delete('admin_token');
    return response;
}
