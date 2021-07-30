import { model, Schema } from 'mongoose';

const orderSchema = new Schema({
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

const Order = model('Order', orderSchema);

export default Order;