import ProductShema from './product.schema.js'

export default ({name, barCode, description, category, quantity}) => {
    console.log("[MONGO:ProductShema::SAVE]")
    const product = new ProductShema({
        name,
        barCode,
        description,
        category,
        quantity
    });

    // Save Note in the database
    return product.save();

}