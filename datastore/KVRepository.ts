import {createClient} from '@vercel/kv';

const kvClient = createClient({
    url: process.env.KV_REST_API_URL || "",
    token: process.env.KV_REST_API_TOKEN || "",
});

export function getStats() {
    return kvClient.hgetall("stats");
}

export async function storeStats( data : AllStats) {
    // Store the result in KV
    await kvClient.hset("stats", {
        "nearEarthObjects": data.nearEarthObjects,
        "geoStorms": data.geoStorms,
        "earthquakes": data.earthquakes
    } );
}