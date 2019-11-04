
export default (database) => {
    return {
        ...database,
        create: (product) => {
           return database.getClient().post(product)
        },
        findAll: () => {
            return database.getClient().allDocs({include_docs: true}).then((result)=>{
                return result.rows.map(row=>row.doc)
            });
        },
        findOne: () => {},
        update: () => {},
        remove: () => {}
    }
}