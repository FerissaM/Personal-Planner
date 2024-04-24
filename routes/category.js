const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// get all categories
router.get('/', (req, res) => {
    Category.find({}, (err, categories) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(categories);
        }
    });
});

// to create a new category
router.post('/', (req, res) => {
    const { name } = req.body;
    const newCategory = new Category({ name });

    newCategory.save((err, category) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(category);
        }
    });
});

// to delete a category
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Category.findByIdAndDelete(id, (err, deletedCategory) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else if (!deletedCategory) {
            res.status(404).send('Category not found');
        } else {
            res.json(deletedCategory);
        }
    });
});

module.exports = router;
