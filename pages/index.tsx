// Modules
import {MyNavBar} from "doom/components/modules/MyNavBar";
import {MyPageBanner} from "doom/components/modules/MyPageBanner";
import {MyFooter} from "doom/components/modules/MyFooter";

// Elements
import {NasaGstButton} from "doom/components/elements/NasaGstButton";
import {NasaNeoButton} from "doom/components/elements/NasaNeoButton";

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
                    <EarthquakeButton data={earthquakes}/>
                    <NasaGstButton data={geoStorms}/>
                    <NasaNeoButton data={nearEarthObjects}/>
                </div>
            </div>
            <MyFooter/>
        </main>
    )

}
