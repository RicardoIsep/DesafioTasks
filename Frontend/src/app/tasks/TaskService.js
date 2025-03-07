import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/tasks`;

export const fetchTasks = () => axios.get(API_URL);
export const addTask = (title) => axios.post(API_URL, { title });
export const toggleTask = (id) => axios.patch(`${API_URL}/${id}`);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);