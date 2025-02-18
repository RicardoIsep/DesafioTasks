import * as TaskService from '../services/TaskService.js';

export const createTask = async (req, res) => {
    const { title } = req.body;
    const newTask = await TaskService.createTask(title);
    res.status(201).json(newTask);
};

export const getAllTasks = async (req, res) => {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
};

export const toggleTaskCompletion = async (req, res) => {
    const { id } = req.params;
    const task = await TaskService.toggleTaskCompletion(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await TaskService.deleteTask(id);
    res.json({ message: 'Task deleted' });
};