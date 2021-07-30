import { model, Schema } from 'mongoose';

const paymentSchema = new Schema({
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

const Payment = model('Payment', paymentSchema);

export default Payment;
