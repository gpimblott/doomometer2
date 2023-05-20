import * as redis from 'redis';

const connectionURL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

class RedisRepository implements RepositoryInterface {
    private redisClient;

    constructor() {
        console.log("Connecting to... " + connectionURL)
        try {
            this.redisClient = redis.createClient({url: connectionURL});
            this.redisClient.connect();
            this.redisClient.on("error", (error) => console.error(`Error : ${error}`));
        } catch (error) {
            console.log(error);
        }
    }

    async getStats(): Promise<any | null> {
        let result = null;
        if (this.redisClient != undefined) {
            result = await this.redisClient.get("stats");
        }

        if (result) {
            return JSON.parse(result);
        } else {
            return JSON.parse("");
        }
    }

    async storeStats(data: AllStats): Promise<void> {

        if (this.redisClient != undefined) {
            this.redisClient.set("stats", JSON.stringify(data));
        }
    }
}

export default RedisRepository;