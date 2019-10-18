import ProductShema from './product.schema.js'

export default (name, barCode, description, category, quantity) => {
    // Create a Note
    const note = new ProductShema({
        name,
        barCode,
        description,
        category,
        quantity
    });

    // Save Note in the database
    return note.save();

}