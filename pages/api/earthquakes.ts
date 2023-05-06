// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    count: number
}

//* This API endpoint is used to get the number of earthquakes that occurred in the last 24 hours.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://earthquake.usgs.gov/fdsnws/event/1/count';
    const params = {
        format: 'geojson',
        starttime: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        endtime: new Date().toISOString(),
    };

    const queryParams = new URLSearchParams(params);

    try {
        const response = await fetch(`${url}?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to fetch earthquake count');
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch earthquake count' });
    }
}