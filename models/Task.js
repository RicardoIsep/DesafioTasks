import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false, required: true }
});

const Task = mongoose.model('Task', TaskSchema);
