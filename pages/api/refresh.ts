import type {NextApiRequest, NextApiResponse} from 'next'
import {createClient} from "@vercel/kv";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const kvApi = createClient({
        url: process.env.KV_REST_API_URL || "",
        token: process.env.KV_REST_API_TOKEN || "",
    });

    const quakeResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/earthquakes");
    const quakeData: StatsResponse = await quakeResp.json();

    const gstResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/nasa_gst");
    const gstData: StatsResponse = await gstResp.json();

    const neoResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/nasa_neo");
    const neoData: StatsResponse = await neoResp.json();

    // Store the result in KV
    const result = await kvApi.hset("stats",
        {
            "neo": neoData,
            "geostorms": gstData,
            "earthquakes": quakeData
        });

    return res.status(200).end();
}