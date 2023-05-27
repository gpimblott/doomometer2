import type {NextApiRequest, NextApiResponse} from 'next'

import {getRepository} from "doom/datastore/Repository";

const storeClient = getRepository();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const quakeResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/earthquakes");
    const quakeData: StatsItem = await quakeResp.json();

    const gstResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/nasa_gst");
    const gstData: StatsItem = await gstResp.json();

    const neoResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/nasa_neo");
    const neoData: StatsItem = await neoResp.json();

    const epiResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/epidemics");
    const epiData: StatsItem = await epiResp.json();

    const floodResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/floods");
    const floodData: StatsItem = await floodResp.json();

    const cycloneResp = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/cyclones");
    const cycloneData: StatsItem = await cycloneResp.json();

    // Get the current data and set the direction
    const oldState: AllStats = await storeClient.getStats();

    neoData.direction = oldState.nearEarthObjects.count - neoData.count;
    gstData.direction = oldState.geoStorms.count - gstData.count;
    quakeData.direction = oldState.earthquakes.count - quakeData.count;
    epiData.direction = oldState.epidemics.count - epiData.count;
    floodData.direction = oldState.floods.count - floodData.count;
    cycloneData.direction = oldState.cyclones.count - cycloneData.count;

    await storeClient.storeStats({
        "nearEarthObjects": neoData,
        "geoStorms": gstData,
        "earthquakes": quakeData,
        "epidemics": epiData,
        "floods" : floodData,
        "cyclones": cycloneData
    });

    return res.status(200).end();
}