import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoutes from './routes/booksRoutes.js';
import cors from 'cors';

const app = express();

//Middleware to parse the request body as JSON
app.use(express.json());

// Middleware for CORS
app.use(
    cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to the Bookstore' );
});

app.use('/books', booksRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`);
          });
    })
    .catch((err) => {
        console.log(err);
    });