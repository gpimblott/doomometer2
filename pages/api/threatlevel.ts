import type {NextApiRequest, NextApiResponse} from 'next'
import * as https from "https";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const url = 'https://www.mi5.gov.uk/UKThreatLevel/UKThreatLevel.xml';
    console.log("new method");
    let data: any[] = [];
    https.get(url , res=>{
        console.log(res.statusCode);
        res.on('data', (chunk) => {
            data.push(chunk);
        });
        res.on('end', () => {
            console.log("ended");
            console.log( Buffer.concat(data).toString() );

        }).on( 'error', err=>{
            console.log('Error: ', err.message);
        })
    })
    // const parser = new Parser();
    //
    // try {
    //
    //     let feed = parser.parseURL(url).then(data => {
    //         console.log(data);
    //     });
    //     //  console.log( feed.title);
    //
    //
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({message: 'Failed to fetch threat level count'});
    // }
}