import type {NextApiRequest, NextApiResponse} from 'next'
import {createClient} from "@vercel/kv";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://earthquake.usgs.gov/fdsnws/event/1/count';
    const params = {
        format: 'geojson',
        starttime: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        endtime: new Date().toISOString(),
    };

    const kvApi = createClient({
        url: process.env.KV_REST_API_URL || "",
        token: process.env.KV_REST_API_TOKEN || "",
    });

    const queryParams = new URLSearchParams(params);

    try {
        const response = await fetch(`${url}?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to fetch earthquake count');
        }
        const data = await response.json();
        const result = await kvApi.hset("stats", {"quakesinday":data.count});
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        //res.status(500).json({ message: 'Failed to fetch earthquake count' });
    }
}