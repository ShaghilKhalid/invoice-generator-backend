// Packages
const express = require('express')
const connectDB = require('./DB/connection')
const InvoiceModel = require('./model/Invoice')
const cors = require('cors')
// Packages End
// variables
const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors())
// variables End
// Post requests
connectDB()
app.post('/create-invoice', async (req, res) => {
    const { billed_to, biller_email, subject, invoice_date, due_date, item, item_description, quantity, amount, address } = await req.body;
    try {
        await InvoiceModel.create({ billed_to, biller_email, subject, invoice_date, due_date, item, item_description, quantity, amount, address })
        res.send({
            data: {
                status: 201,
                message: "Invoice Created Successfully"
            }
        })
    } catch (error) {
        res.send({
            Error: {
                status: 400,
                message: "Error"
            }
        })
    }
})
// Post requests End
// Get requests 
app.get('/getAllInvoice', async (req, res) => {
    try {
        const data = await InvoiceModel.find();
        res.send({
            response: {
                status: 200,
                message: 'success',
                data: data
            }
        })
    } catch (error) {
        res.send({
            Error: {
                status: 400,
                message: "Error"
            }
        })
    }
})
app.get('/getInvoiceById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await InvoiceModel.find({ _id: id });
        res.send({
            response: {
                status: 200,
                message: 'success',
                data: data
            }
        })
    } catch (error) {
        res.send({
            Error: {
                status: 400,
                message: "Error"
            }
        })
    }
})
// Get requests End
// Checking
app.get("/checking", (req, res) => {
    res.send({ message: "Working" })
})
// Checking End
// PORT
app.listen(PORT, () => console.log(`Server is running at Port ${PORT}`))
// PORT End