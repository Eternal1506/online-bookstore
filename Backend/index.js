import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
// import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoutes from './routes/booksRoutes.js';
import cors from 'cors';

const app = express();

//Middleware to parse the request body as JSON
app.use(express.json());

// Middleware for CORS
app.use(
    cors({
    // origin: ['https://main.d2yqflachgvalr.amplifyapp.com/', 'http://localhost:5173/', 'https://online-bookstore-58ls.onrender.com/'],
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (req, res) => { // Define a route handler for the default home page
    console.log(req);
    return res.status(234).send('Welcome to the Bookstore' );
});

app.use('/books', booksRoutes); // Use the booksRoutes for all routes starting with /books

mongoose // Connect to MongoDB
    .connect(process.env.mongoDBURL)
    .then(() => {
        console.log('App Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`App listening on port ${process.env.PORT}!`);
          });
    })
    .catch((err) => {
        console.log(err);
    });