export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    const API_KEY = import.meta.env.ASTRAL_API_KEY;
    const API_BASE = 'https://astralseal-llm.vercel.app/api/voting';

    try {
        const body = await request.json();

        const response = await fetch(`${API_BASE}/vote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY,
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to submit vote' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
