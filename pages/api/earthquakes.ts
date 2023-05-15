import type {NextApiRequest, NextApiResponse} from 'next'

/**
 * Data object returned from USGS
 */
interface USGSResponse {
    count: number
    maxAllowed: number
}


/**
 * Get the number of earthquakes in last X days
 * @param req
 * @param res
 * @return JSON object containing number of earthquakes in last 7 days
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const numDays = 7;
    const url = 'https://earthquake.usgs.gov/fdsnws/event/1/count';
    const params = {
        format: 'geojson',
        starttime: new Date(Date.now() - ((24 * 60 * 60 * 1000) * numDays)).toISOString(),
        endtime: new Date().toISOString(),
    };


    const queryParams = new URLSearchParams(params);

    try {
        // Retrieve the earthquake count from the API
        const response = await fetch(`${url}?${queryParams}`);
        if (!response.ok) {
            throw new Error('Failed to fetch earthquake count');
        }
        const data: USGSResponse = await response.json();

        const quakeResponse: StatsResponse = {
            count: data.count,
            days: numDays
        }

        res.status(200).json(quakeResponse);
    } catch (error) {
        res.status(500).json({message: 'Failed to fetch earthquake count'});
    }
}