import {createClient, VercelKV} from '@vercel/kv';

class KVRepository implements RepositoryInterface {
    private kvClient: VercelKV;

    constructor() {
        this.kvClient = createClient({
            url: process.env.KV_REST_API_URL || '',
            token: process.env.KV_REST_API_TOKEN || '',
        });
    }

    async getStats(): Promise<any | null> {
        return this.kvClient.get('stats');
    }

    async storeStats(data: AllStats): Promise<void> {
        await this.kvClient.set('stats', data);
    }
}

export default KVRepository;