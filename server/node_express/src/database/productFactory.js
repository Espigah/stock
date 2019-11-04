import requireAllDatabases from '../utils/requireAllDatabases';
import databaseConfig from '../../database.config';
import databaseFactory from "./databaseFactory"
//
let FACTORY_MAP = {}

requireAllDatabases((dbInfo) => {
    FACTORY_MAP[dbInfo.name] = dbInfo.product;
});



export default () => {
    return databaseConfig.map(({
        url,
        adapter
    }) => {
        let adapterCreated = FACTORY_MAP[adapter];
        if (!adapterCreated) {
            console.log(FACTORY_MAP)
            throw new Error("[productFactory] Adapter not found! "+ adapter);
        }
        let database = databaseFactory(adapter, url);
        console.log(database)
        return Object.freeze(adapterCreated(Object.freeze(database)));
    })
}