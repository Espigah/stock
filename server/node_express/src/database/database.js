import databaseAdapterMongo from "./database.adapte.mongor";
import databaseAdapterPostgres from "./database.adapte.postgres";
import databaseAdapters from '../database/database.adapters';

const ADAPTER_MAP = {
    [databaseAdapters.MONGO]: databaseAdapterMongo.connect.bind(this),
    [databaseAdapters.POSTGRES]: databaseAdapterPostgres.connect.bind(this)
}

export default {
    connect: (url, adapter) => {
        const databaseAdapter = ADAPTER_MAP[adapter];
        if (!databaseAdapter) {
            throw new Error("Adapter not found!");
        }
        return databaseAdapter(url, adapter);
    }
}