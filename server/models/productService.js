import { model, Schema } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Product = model('Product', productSchema);

export default Product;