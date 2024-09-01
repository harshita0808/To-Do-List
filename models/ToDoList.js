// models/ToDoList.js

const mongoose = require('mongoose');
const { Schema } = mongoose;
const express = require('express');
const toDoSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1000
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    completedOn: {
        type: Date
    },
    dueDate: {
        type: Date
    },
    createdBy: {
        ref: "User",
        type: Schema.ObjectId
    }
},
{
    timestamps: true
});

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo;