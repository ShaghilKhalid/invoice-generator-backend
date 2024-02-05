const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Invoice = new Schema({
    billed_to: {
        type: String,
        required: false
    },
    biller_email: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: false
    },
    invoice_date: {
        type: Date,
        required: false
    },
    due_date: {
        type: Date,
        required: false
    },
    item: {
        type: String,
        required: false
    },
    item_description: {
        type: String,
        required: false
    },
    quantity: {
        type: Number,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false
    },
})

// Creating Model
const InvoiceModel = mongoose.models.invoice || mongoose.model("invoice", Invoice)
module.exports = InvoiceModel