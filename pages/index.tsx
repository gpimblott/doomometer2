import React, {useState,} from "react";
import {MyNavBar} from "doom/components/MyNavBar";
import {MyPageBanner} from "doom/components/MyPageBanner";
import {MyFooter} from "doom/components/MyFooter";

export default function Document() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_EARTHQUAKE_API"] || "/api/earthquakes";
    const HOSTNAME: string = process.env["NEXT_PUBLIC_API_HOST"] || "http://localhost:3000";
    const path = `${HOSTNAME}${API_ENDPOINT}`;

    const [numEarthquakes, setNumEarthquakes] = useState(0);

    // Fetch earthquake count from API
    fetchEarthquakeCount();

    function fetchEarthquakeCount() {
        fetch(path)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data) {
                    setNumEarthquakes(data.count);
                } else {
                    console.log("Error retrieving earthquake count");
                }
            }).catch((error) => {
            console.error(error);
        });
    }


    return (
        <main>
            <MyNavBar></MyNavBar>
            <MyPageBanner></MyPageBanner>
            <div className="container mx-auto">
                {/*<h1 className="text-4xl font-bold mb-4">Doomometer v2</h1>*/}
                <div id="earthquake-count" className="text-2xl mb-4"></div>
                <div className={"grid grid-cols-2 gap-x-20"}>
                    <div className="p-4 bg-gray-200 rounded-xl text-gray-800">
                        <div className="font-bold text-2xl leading-none">{numEarthquakes}</div>
                        <div className="mt-2">Earthquakes in the last 24 hours</div>
                    </div>
                    <div className="p-4 bg-gray-200 rounded-xl text-gray-800">
                        <div className="font-bold text-2xl leading-none">{numEarthquakes}</div>
                        <div className="mt-2">Earthquakes in the last 24 hours</div>
                    </div>
                </div>
            </div>
            <MyFooter/>
        </main>
    )


}
