"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Book_1 = require("../models/Book");
const router = (0, express_1.Router)();
router.post('/api/book', async (req, res) => {
    try {
        const book = new Book_1.Book({
            author: req.body.author,
            name: req.body.name,
            pages: req.body.pages
        });
        await book.save();
        res.status(200).json({ message: "Book added successfully", book: book });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.default = router;
