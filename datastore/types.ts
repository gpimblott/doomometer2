/**
 * Shared interfaces
 */

interface StatsMetrics {
    "earthquakes": MetricStatsItem;
    "geostorms": MetricStatsItem;
    "neo": MetricStatsItem;
}

interface MetricStatsItem {
    count: number,
    days: number
}