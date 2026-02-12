export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const API_KEY = import.meta.env.ASTRAL_API_KEY;
    const API_BASE = 'https://astralseal-llm.vercel.app/api/voting';

    try {
        const response = await fetch(`${API_BASE}/results`, {
            headers: {
                'X-API-Key': API_KEY,
            },
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch votes' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
