import { NextResponse } from 'next/server';
import { getValidTokens } from '../api/auth/route';

/**
 * Validates the admin authentication cookie.
 * Returns null if authenticated, or a 401 NextResponse if not.
 * Usage in API routes:
 *   const authError = requireAuth(request);
 *   if (authError) return authError;
 */
export function requireAuth(request) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token || !getValidTokens().has(token)) {
        return NextResponse.json(
            { error: 'No autorizado. Inicia sesión en el panel del promotor.' },
            { status: 401 }
        );
    }

    return null; // Authenticated
}
