import RedisRepository from "doom/datastore/RedisRepository";
import KVRepository from "doom/datastore/KVRepository";

const DatabaseToUse =  process.env.DATABASE_TYPE || "KV";

console.log("Using Database : " + DatabaseToUse);

enum DatabaseType {
    KV = 'KV',
    REDIS = 'Redis'
}

/**
 * Use a factory pattern to create the desired database based on the
 * environment variable
 */
export function getRepository() : RepositoryInterface {
    switch(DatabaseToUse) {
        case DatabaseType.KV :
            return new KVRepository();
        case DatabaseType.REDIS :
            return new RedisRepository();
        default:
            return new KVRepository();
    }
}