import React, {useState,} from "react";

export default function Document() {
    const API_ENDPOINT :string = process.env["NEXT_PUBLIC_EARTHQUAKE_API"] || "/api/earthquakes";
    const HOSTNAME :string = process.env["NEXT_PUBLIC_API_HOST"] || "http://localhost:3000";
    const path = `${HOSTNAME}${API_ENDPOINT}`;

    const [numEarthquakes, setNumEarthquakes] = useState(0);

    // Fetch earthquake count from API
    fetchEarthquakeCount();

    function fetchEarthquakeCount() {
        const response = fetch(path)
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


    function DisplayEarthquake() {
        return (
            <div className="earthquake-count">
                <p>Number of earthquakes in the last 24 hours: {numEarthquakes}</p>
            </div>
        );
    }

    return (
        <main>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-4">Doomometer v2</h1>
                <div id="earthquake-count" className="text-2xl mb-4"></div>
            </div>
            <DisplayEarthquake></DisplayEarthquake>
        </main>
    )


}
