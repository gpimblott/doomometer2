import type {NextApiRequest, NextApiResponse} from 'next'

//* This API endpoint is used to get the number near earth objects in the next 7 days.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://api.nasa.gov/neo/rest/v1/feed';
    const startDate = new Date().toISOString().split('T')[0];

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

        const NeoResp: MetricStatsItem = {
            count: data.element_count,
            days: 7
        }

        res.status(200).json(NeoResp);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Failed to call NASA GeoStormAPI'});
    }
}