import {createClient} from '@vercel/kv';

export function getStats() {
    const quakes = createClient({
        url: process.env.KV_REST_API_URL || "",
        token: process.env.KV_REST_API_TOKEN || "",
    });

    return quakes.hgetall("stats");
}