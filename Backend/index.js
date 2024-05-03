import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to the Bookstore' );
});

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