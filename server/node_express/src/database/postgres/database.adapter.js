import pgp from 'pg-promise';

export default (url, adapter) => {
    return {
        connect: () => {
            return Promise.reject(false);
            try {
                return Promise.reject(false);
                return Promise.resolve(db);
            } catch (error) {
                return Promise.reject(error);
            }
        },
        disconnect: () => {
            try {
                return Promise.resolve();
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
}