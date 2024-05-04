import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();


// Route to savce a book
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'All fields are required' });
        }
        const newbook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newbook);
        return res.status(201).send(book);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// Route to get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// Route to get one books by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        return res.status(200).json(book);
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// Route to update a book by ID
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'All fields are required' });
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send({ message: 'Book not found' });
        }
        return res.status(200).send({ message: 'Book updated successfully' });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

// Route to delete a book by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: 'Book not found' });
        }
        return res.status(200).send({ message: 'Book deleted successfully' });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

export default router;