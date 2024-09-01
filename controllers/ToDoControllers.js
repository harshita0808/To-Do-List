// ToDoControllers.js
const express=require('express');
const ToDo = require('../models/TodoList');

// Validation function
const validateToDoData = (data) => {
    if (!data || !data.title || !data.description) {
        return { error: 'Invalid request data' };
    }
    // Add additional validation here
    return null;
};

// Error handling function
const handleError = (err, res) => {
    console.log(err);
    res.status(400).send({ error: 'An error occurred' });
};

exports.createToDo = async (req, res) => {
    try {
        const data = req.body;
        const validationError = validateToDoData(data);
        if (validationError) {
            return res.status(400).send(validationError);
        }
        const todo = new ToDo(data);
        const result = await todo.save();
        console.log(result);
        res.status(201).send({ message: 'Created New Task!' });
    } catch (err) {
        handleError(err, res);
    }
};

exports.getAllToDo = async (req, res) => {
    let { userId } = req.params;

    try {
        const result = await ToDo.find({ createdBy: userId });
        res.send(result);
    } catch (err) {
        handleError(err, res);
    }
};

exports.updateToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const validationError = validateToDoData(data);
        if (validationError) {
            return res.status(400).send(validationError);
        }
        const result = await ToDo.findByIdAndUpdate(id, { $set: data }, { returnOriginal: false });
        console.log(result);
        res.send({ message: 'ToDo list Updated!' });
    } catch (err) {
        handleError(err, res);
    }
};

exports.deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ToDo.findByIdAndDelete(id);
        console.log(result);
        res.send({ message: 'ToDo Task Deleted!' });
    } catch (err) {
        handleError(err, res);
    }
};