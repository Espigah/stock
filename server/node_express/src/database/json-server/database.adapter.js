export default (url, adapter) => {
    return {
        connect: () => {
            return Promise.resolve();
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