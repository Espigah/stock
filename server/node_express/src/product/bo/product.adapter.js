import productAdapterMongo from './product.adapter.mongo'
import productAdapterPostgres from './product.adapter.postgres'
import databaseAdapters from "../../database/database.adapters";

import databaseConfig from '../../../database.config';

const ADAPTER_MAP = {
    [databaseAdapters.MONGO]: productAdapterMongo,
    [databaseAdapters.POSTGRES]: productAdapterPostgres
}

const factory = (adpter = databaseConfig.adpter) => {

    const adapter = ADAPTER_MAP[adpter.toUpperCase()];
    if (!adapter) {
        throw new Error('Adapter not found!');
    }
    return adapter;
}


export default {
    factory
}