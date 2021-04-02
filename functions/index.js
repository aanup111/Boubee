const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51IanpZGS67IcsTs1wJotJMrKAGpbc4TQYV7JSMoBHsZCeHz8M5oF6p9ImPtlfGEKL7imdCi3f54V0QgTAlBZvduj00bsB0WToE')

// SETTING UP API

// App config

const app = express();


// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    // total amount passed in from query param payment.js (getClientTotal)
    const total = request.query.total;


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    // 201 is response status for OK ( it's created)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command

exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/boubee-34260/us-central1/api