import {fetchFromApi} from "doom/utils/fetchUtil";

export function UpdateEarthquakes() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_EARTHQUAKE_API"] || "/api/earthquakes";
    return fetchFromApi(API_ENDPOINT);
}