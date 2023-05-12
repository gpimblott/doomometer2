import {useState} from "react";

// Modules
import {MyNavBar} from "doom/components/modules/MyNavBar";
import {MyPageBanner} from "doom/components/modules/MyPageBanner";
import {MyFooter} from "doom/components/modules/MyFooter";

// Elements
import {EarthquakeButton} from "doom/components/elements/EarthquakeButton";
import {NasaGstButton} from "doom/components/elements/NasaGstButton";

// Helpers
import {UpdateEarthquakes} from "doom/utils/earthquakesHelper";
import {UpdateGST} from "doom/utils/nasaHelper";


export default function Document() {
    const API_ENDPOINT: string = process.env["NEXT_PUBLIC_EARTHQUAKE_API"] || "/api/earthquakes";
    const HOSTNAME: string = process.env["NEXT_PUBLIC_API_HOST"] || "http://localhost:3000";
    const path = `${HOSTNAME}${API_ENDPOINT}`;

    const [numEarthquakes, setNumEarthquakes] = useState(0);
    const [numGst, setGstData] = useState(0);

    // Force an update of the number of earthquakes
    UpdateEarthquakes().then((data) => setNumEarthquakes(data.count));
    UpdateGST().then((data) => setGstData(data.count));

    return (
        <main>
            <MyNavBar></MyNavBar>
            <MyPageBanner></MyPageBanner>
            <div className="container mx-auto">
                {/*<h1 className="text-4xl font-bold mb-4">Doomometer v2</h1>*/}
                <div id="earthquake-count" className="text-2xl mb-4"></div>
                <div className={"grid grid-cols-2 gap-x-20 gap-y-10"}>

                    <div className={"col-span-2"}>
                        <div className="p-4 bg-gray-200 rounded-xl text-gray-800">
                            <div className="font-bold text-2xl center">Current status : Amber</div>
                            <div className="mt-2">Some more words that need to be said</div>
                        </div>
                    </div>
                    <EarthquakeButton data={numEarthquakes}/>
                    <NasaGstButton data={numGst}/>
                </div>
            </div>
            <MyFooter/>
        </main>
    )


}
