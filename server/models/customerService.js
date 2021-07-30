import { model, Schema } from 'mongoose';

const customerSchema = new Schema({
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

const Customer = model('Customer', customerSchema);

export default Customer;