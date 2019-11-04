export default (database) => {
    return {
        ...database,
        create: (product) => {},
        findAll: () => {
            return  database.connect()
        },
        findOne: () => {},
        update: () => {},
        remove: () => {}
    }
}