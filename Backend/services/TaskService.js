import * as TaskRepository from '../repositories/TaskRepository.js';

export const createTask = async (title) => {
    return await TaskRepository.createTask(title);
};

export const getAllTasks = async () => {
    return await TaskRepository.getAllTasks();
};

export const toggleTaskCompletion = async (id) => {
    return await TaskRepository.toggleTaskCompletion(id);
};

export const deleteTask = async (id) => {
    return await TaskRepository.deleteTask(id);
};