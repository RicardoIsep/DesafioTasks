import axios from 'axios';

const API_URL = 'http://localhost:5001/api/tasks';

export const getAllTasks = () => axios.get(API_URL);
export const createTask = (title) => axios.post(API_URL, { title });
export const toggleTaskCompletion = (id) => axios.patch(`${API_URL}/${id}`);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);