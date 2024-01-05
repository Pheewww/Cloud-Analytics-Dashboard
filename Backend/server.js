const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();

// CORS configuration to allow requests from frontend
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Rate Limiting
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
}));

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/billingDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Billing Schema
const billingSchema = new mongoose.Schema({
    customerId: String,
    accountName: String,
    serviceName: String,
    subscriptionPlan: String,
    resourceId: String,
    usageQuantity: Number,
    unitPrice: Number,
    timestamp: Date,
    message: String
});

billingSchema.index({ timestamp: 1, customerId: 1, resourceId: 1 }); // Indexing fields for better query performance
const Billing = mongoose.model('Billing', billingSchema);

// Ingestor Endpoint for Billing Data
app.post('/ingest-billing', async (req, res) => {
    if (!Array.isArray(req.body)) {
        return res.status(400).send('Expected an array of billing entries');
    }

    try {
        await Billing.insertMany(req.body);
        res.send('Billing data ingested successfully');
    } catch (err) {
        res.status(500).send('Error ingesting billing data: ' + err);
    }
});

//SEARCH ENDPOINT
app.get('/search', async (req, res) => {
    try {
        res.set('Cache-Control', 'no-store'); // Disable caching
        const query = buildQuery(req.query);
        const billingEntries = await Billing.find(query).exec();
        res.json(billingEntries);
    } catch (err) {
        res.status(500).send('Error processing search: ' + err);
    }
});

function buildQuery(params) {
    let query = {};
    if (params.customerId) query.customerId = params.customerId;
    if (params.accountName) query.accountName = new RegExp(params.accountName, 'i'); // For full-text search
    if (params.serviceName) query.serviceName = new RegExp(params.serviceName, 'i');
    if (params.subscriptionPlan) query.subscriptionPlan = params.subscriptionPlan;
    if (params.resourceId) query.resourceId = params.resourceId;
    if (params.usageQuantity) query.usageQuantity = Number(params.usageQuantity);
    if (params.unitPrice) query.unitPrice = Number(params.unitPrice);
    if (params.timestamp) query.timestamp = { $gte: new Date(params.timestamp) };
    if (params.message) query.message = new RegExp(params.message, 'i');

    return query;
}

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
