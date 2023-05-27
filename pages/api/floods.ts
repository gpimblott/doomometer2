import {NextApiRequest, NextApiResponse} from "next";

/**
 * Call Relief Web to get the ongoing disaster stats
 * @param req
 * @param res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = "https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&slim=1&query%5Bvalue%5D=type.id%3A4611+AND+status%3Acurrent&query%5Boperator%5D=AND\n";
    try {
        const response = await fetch(`${url}`);
        if (!response.ok) {
            throw new Error('Failed to call Relief web (epidemics)');
        }
        const data = await response.json();

        const ReliefResp: StatsItem = {
            count: data.totalCount,
            days: 0,
            direction: 0
        }

        res.status(200).json(ReliefResp);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Failed to call Relief Web Flood'});
    }
}