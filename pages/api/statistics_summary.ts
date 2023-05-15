import type {NextApiRequest, NextApiResponse} from 'next'
import { createClient } from '@vercel/kv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const quakes = createClient({
        url: process.env.KV_REST_API_URL || "",
        token: process.env.KV_REST_API_TOKEN || "",
    });

    const stats = await quakes.hgetall("stats");
    return res.status(200).json({ "stats": stats} );
}