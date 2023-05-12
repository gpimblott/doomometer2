import {fetchFromApi} from "doom/utils/fetchUtil";

export function UpdateGST() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_NASA_GST_API"] || "/api/nasa_gst";
    return fetchFromApi(API_ENDPOINT);
}