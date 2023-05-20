// Define an interface for our repositories



interface storeStructure {
    "neo": MetricStatsItem,
    "geostorms": MetricStatsItem,
    "earthquakes": MetricStatsItem
}

interface DataRepositoryInterface<> {
    store(data: storeStructure): Promise<storeStructure>;
    retrieveStats() : Promise<storeStructure>;
}