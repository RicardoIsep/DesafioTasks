import Task from '../models/Task.js';

export const createTask = async (title) => {
    return await Task.create({ title });
};

export const getAllTasks = async () => {
    return await Task.find();
};

export const toggleTaskCompletion = async (id) => {
    const task = await Task.findById(id);
    if (!task) return null;
    task.completed = !task.completed;
    return await task.save();
};

export const deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id);
};