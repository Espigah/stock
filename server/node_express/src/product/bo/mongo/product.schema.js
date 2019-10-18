import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    idProduct: Number,
    name: String,  
    barCode: Number,
    description: String,
    category: String,
    quantity: Number

}, {
    timestamps: true
});

export default mongoose.model('Product', ProductSchema);