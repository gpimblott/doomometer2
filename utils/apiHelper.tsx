import {fetchFromApi} from "doom/utils/fetchUtil";

export function UpdateStats() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_STATS_API"] || "/api/stats";
    return fetchFromApi(API_ENDPOINT);
}

export function UpdateEarthquakes() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_EARTHQUAKE_API"] || "/api/earthquakes";
    return fetchFromApi(API_ENDPOINT);
}

export function UpdateGST() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_NASA_GST_API"] || "/api/nasa_gst";
    return fetchFromApi(API_ENDPOINT);
}

export function UpdateThreatLevel() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_THREAT_API"] || "/api/threatlevel";
    return fetchFromApi(API_ENDPOINT);
}