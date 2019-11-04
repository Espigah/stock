import productCreateMongo from './bo/product.create.mongo'

import ProductShema from './bo/product.schema.js'


export default (database) => {
    return {
        ...database,
        create: (product) => {
            return productCreateMongo(product);
        },
        findAll: () => {          
            return   ProductShema.find({})
        },
        findOne: () => {},
        update: () => {},
        remove: () => {}
    }
}