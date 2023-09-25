// Modules
import {MyPageBanner} from "doom/components/modules/MyPageBanner";
import {MyFooter} from "doom/components/modules/MyFooter";

// Elements
import {NasaGstButton} from "doom/components/elements/NasaGstButton";
import {NasaNeoButton} from "doom/components/elements/NasaNeoButton";
import {EpidemicButton} from "doom/components/elements/EpidemicButton";
import {FloodButton} from "doom/components/elements/FloodButton";
import {CycloneButton} from "doom/components/elements/CycloneButton";

// Repository
import {getRepository} from "doom/datastore/Repository";
import {EarthquakeButton} from "doom/components/elements/EarthquakeButton";

//const storeClient = new KVRepository();
const storeClient = getRepository();
/**
 * Populate the stats from the datastore
 */
export async function getServerSideProps() {
    const value = await storeClient.getStats();
    return {"props": value};
}

export default function Index(stats : AllStats) {
    const earthquakes = stats.earthquakes;
    const geoStorms = stats.geoStorms;
    const nearEarthObjects = stats.nearEarthObjects;
    const epidemics = stats.epidemics;
    const floods = stats.floods;
    const cyclones = stats.cyclones;

    return (
        <main>
            <MyPageBanner></MyPageBanner>
            <div className="hero mx-auto min-h-[calc(100vh-342px)]">
                <div className={"hero-content grid grid-cols-2 md:grid-cols-3 gap-x-5"}>
                    <div className={"col-span-2 md:col-span-3"}>
                        <div className="text-white-75">
                            <div className="font-bold text-xl center">Current status : Amber</div>
                            <div className="mt-2">Not very scientific...</div>
                        </div>
                    </div>
                    <EarthquakeButton data={earthquakes}/>
                    <NasaGstButton data={geoStorms}/>
                    <NasaNeoButton data={nearEarthObjects}/>
                    <EpidemicButton data={epidemics}/>
                    <FloodButton data={floods}/>
                    <CycloneButton data={cyclones}/>
                </div>
            </div>
            <MyFooter/>
        </main>
    )
}
