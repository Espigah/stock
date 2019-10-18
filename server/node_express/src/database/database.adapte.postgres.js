
   import pgp from 'pg-promise';

export default {
    connect: (url, adapter) => {
        const db = pgp(url);
        return Promise.resolve(db);
    }
}