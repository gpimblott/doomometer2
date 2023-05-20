import type {NextApiRequest, NextApiResponse} from 'next'
import KVRepository from "doom/datastore/KVRepository";

const storeClient = new KVRepository();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const quakeResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/earthquakes");
    const quakeData: StatsItem = await quakeResp.json();

    const gstResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/nasa_gst");
    const gstData: StatsItem = await gstResp.json();

    const neoResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/nasa_neo");
    const neoData: StatsItem = await neoResp.json();

    await storeClient.storeStats({
        "nearEarthObjects": neoData,
        "geoStorms": gstData,
        "earthquakes": quakeData
    });

    return res.status(200).end();
}