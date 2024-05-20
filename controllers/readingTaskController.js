//controllers/readingTaskController.js
const ReadingTask = require('../models/readingTask');

exports.getReadingTasks = async (req, res) => {
    try {
        const readingTasks = await ReadingTask.find();
        res.render('readingTasks/index', { readingTasks });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createReadingTask = async (req, res) => {
    const { title, author, genre, read } = req.body;
    const readingTask = new ReadingTask({
        title,
        author,
        genre,
        read: read || false
    });

    try {
        await readingTask.save();
        res.redirect('/readingTasks');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.completeReadingTask = async (req, res) => {
    try {
        const readingTask = await ReadingTask.findById(req.params.id);
        if (!readingTask) {
            return res.status(404).json({ message: 'Reading task not found' });
        }
        readingTask.read = true;
        await readingTask.save();
        res.redirect('/readingTasks');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteReadingTask = async (req, res) => {
    try {
        await ReadingTask.findByIdAndDelete(req.params.id);
        res.redirect('/readingTasks');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getEditReadingTask = async (req, res) => {
    try {
        const readingTask = await ReadingTask.findById(req.params.id);
        if (!readingTask) {
            return res.status(404).json({ message: 'Reading task not found' });
        }
        res.render('readingTasks/edit', { task: readingTask });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateReadingTask = async (req, res) => {
    try {
        const { title, author, genre, read } = req.body;
        const updatedTask = { title, author, genre, read };
        await ReadingTask.findByIdAndUpdate(req.params.id, updatedTask);
        res.redirect('/readingTasks');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
