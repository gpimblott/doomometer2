import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Test API called");
    const stats = {
        "earthquakes": {"count": 1, "days": 7, direction: 0},
        "geostorms": {"count": 2, "days": 7, direction: 0},
        "neo": {"count": 3, "days": 7, direction: 0}
    }
    return res.status(200).json({"stats": stats});
}