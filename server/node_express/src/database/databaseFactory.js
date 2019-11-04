import requireAllDatabases from '../utils/requireAllDatabases';
import databaseConfig from '../../database.config';
//
const ADAPTER_MAP = {}
requireAllDatabases((dbInfo) => {
    ADAPTER_MAP[dbInfo.name] = dbInfo.database;
});


export default (adapter = databaseConfig.adapter, url = databaseConfig.url) => {
    const databaseAdapter = ADAPTER_MAP[adapter];
    if (!databaseAdapter) {
        throw new Error("[databaseFactory] Adapter not found!",adapter);
    }

    let database = databaseAdapter(url, adapter);

    return {
        ...database,
        url: url,
        adapter: adapter
    }
}