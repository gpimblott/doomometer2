

interface RepositoryInterface {
    getStats(): Promise<any | null>;
    storeStats(data: AllStats): Promise<void>;
}