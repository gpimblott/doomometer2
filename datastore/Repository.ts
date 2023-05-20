// Define an interface for our repositories



interface storeStructure {
    "neo": StatsResponse,
    "geostorms": StatsResponse,
    "earthquakes": StatsResponse
}

interface DataRepositoryInterface<> {
    store(data: storeStructure): Promise<storeStructure>;
    retrieveStats() : Promise<storeStructure>;
}