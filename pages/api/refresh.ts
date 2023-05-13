import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/earthquakes");
    await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/nasa_gst");
    await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/nasa_neo");

    return res.status(200).end();
}