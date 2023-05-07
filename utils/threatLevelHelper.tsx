import {fetchFromApi} from "doom/utils/fetchUtil";

export function UpdateThreatLevel() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_THREAT_API"] || "/api/threatlevel";
    return fetchFromApi(API_ENDPOINT);
}