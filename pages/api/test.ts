import type {NextApiRequest, NextApiResponse} from 'next'
import { createClient } from '@vercel/kv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Test API called");
    const stats = {
        "earthquakes" : { "count" : 1 , "days" : 7},
        "geostorms" : { "count" : 2 , "days" : 7},
        "neo" : { "count" : 3 , "days" : 7}
    }
    return res.status(200).json({ "stats": stats});
}