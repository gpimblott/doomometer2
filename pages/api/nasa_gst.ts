import type {NextApiRequest, NextApiResponse} from 'next'

//* This API endpoint is used to get the number geomagnetic storms in last X(30) days.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://api.nasa.gov/DONKI/GST';
    const daysHistory = 30;
    const startDate = new Date(Date.now() - ((24 * 60 * 60 * 1000) * daysHistory)).toISOString().split('T')[0];
    const endDate = new Date().toISOString().split('T')[0];

    // Specification of the query
    const params = {
        format: 'geojson',
        startDate: startDate,
        endDate: endDate,
        api_key: process.env.NASA_API_KEY || "DEMO_KEY"
    };

    const queryParams = new URLSearchParams(params);
    try {
        const response = await fetch(`${url}?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to call NASA API');
        }
        const data = await response.json();

        // Calculate how many storms there have been
        let arraySize = 0;
        data.forEach((item: any) => {
            arraySize += item.allKpIndex.length;
        });

        const gstResp: StatsResponse = {
            count: arraySize,
            days: daysHistory
        }

        res.status(200).json(gstResp);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Failed to call NASA GeoStormAPI'});
    }
}