import { NextResponse } from 'next/server';
import { getValidTokens } from '../route';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token || !getValidTokens().has(token)) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true });
}
