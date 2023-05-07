import type {NextApiRequest, NextApiResponse} from 'next'
import Parser from "rss-parser";

//* This API endpoint is used to get the number of earthquakes that occurred in the last 24 hours.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://www.mi5.gov.uk/UKThreatLevel/UKThreatLevel.xml';
    const parser = new Parser();

    try {

        let feed = parser.parseURL(url).then(data => {
            console.log(data);
        });
        //  console.log( feed.title);


    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Failed to fetch threat level count'});
    }
}