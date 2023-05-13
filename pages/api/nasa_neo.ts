import type {NextApiRequest, NextApiResponse} from 'next'
import {createClient} from "@vercel/kv";


//* This API endpoint is used to get the number geomagnetic storms in last X(30) days.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://api.nasa.gov/neo/rest/v1/feed';
    const startDate = new Date().toISOString().split('T')[0];

    // KV interface
    const kvApi = createClient({
        url: process.env.KV_REST_API_URL || "",
        token: process.env.KV_REST_API_TOKEN || "",
    });

    // Specification of the query
    const params = {
        format: 'geojson',
        start_date: startDate,
        api_key: process.env.NASA_API_KEY || "DEMO_KEY"
    };

    const queryParams = new URLSearchParams(params);
    try {
        const response = await fetch(`${url}?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to call NASA Neo');
        }
        const data = await response.json();

        // Store the result in KV
       const result = await kvApi.hset("stats", { "neo":data.element_count });

        res.status(200).json( { "count" : data.element_count } );
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Failed to call NASA GeoStormAPI'});
    }
}