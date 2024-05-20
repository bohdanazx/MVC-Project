//routes/readingTasks.js
const express = require('express');
const router = express.Router();
const readingTaskController = require('../controllers/readingTaskController');

router.get('/', readingTaskController.getReadingTasks);

router.get('/new', (req, res) => res.render('books/new'));

router.post('/', readingTaskController.createReadingTask);

router.post('/:id/complete', readingTaskController.completeReadingTask);

router.post('/:id/delete', readingTaskController.deleteReadingTask);

router.get('/:id/edit', readingTaskController.getEditReadingTask);

router.post('/:id/edit', readingTaskController.updateReadingTask);


module.exports = router;