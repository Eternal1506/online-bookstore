import mongoose from 'mongoose';


let currentDate = new Date();
let currentYear = currentDate.getFullYear();

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },

        publishYear: {
            type: Number > 0 && Number < currentYear,
            required: true,
        },
        // price: {
        //     type: Number,
        //     required: true,
        // },

    },
    { 
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);