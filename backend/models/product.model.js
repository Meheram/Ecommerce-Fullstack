import mongoose from "mongoose";


const productSchema= new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true, default: 0},
    description: {type: String, required: true},
    image: {type: String, required: [true, 'image is required']},
    category: {type: String, required: true},
   
    isFeatured: {type: Boolean, required: true, default: false},


},{ timestamps: true})
const Product= mongoose.model('Product', productSchema)

export default Product;