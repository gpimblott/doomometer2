/**
 * Shared interfaces
 */

/**
 * Definition of the repositories so that we can abstract and support multiple
 */
interface DataRepositoryInterface<> {
    store(data: AllStats): Promise<AllStats>;

    retrieveStats(): Promise<AllStats>;
}

/**
 * The representation of the collected statistics
 */
interface AllStats {
    "earthquakes": StatsItem;
    "geoStorms": StatsItem;
    "nearEarthObjects": StatsItem;
    "epidemics": StatsItem;
    "floods": StatsItem;
    "cyclones": StatsItem;
}

/**
 * Each statistic should contain the following
 */
interface StatsItem {
    count: number,
    days: number
}