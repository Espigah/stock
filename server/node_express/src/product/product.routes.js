import express from "express";

import {
    create,
    findAll,
    findOne,
    update,
    remove
} from './product.controller';


const router = express.Router();

// Create a new Product
router.post('/', create);

// Retrieve all Products
router.get('/', findAll);

// Retrieve a single Product with id
//router.get('/:id', findOne);

// Update a Product with id
router.put('/:id', update);

// Delete a Product with id
router.delete('/:id', remove);



export default router.use('/products', router);