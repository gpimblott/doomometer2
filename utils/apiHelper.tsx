import {fetchFromApi} from "doom/utils/fetchUtil";

export function UpdateStats() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_STATS_API"] || "/api/statistics_summary";
    return fetchFromApi(API_ENDPOINT);
}
