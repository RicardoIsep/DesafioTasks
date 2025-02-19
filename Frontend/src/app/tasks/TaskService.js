import axios from 'axios';

const API_URL = 'http://192.168.1.198:5001/api/tasks';

export const fetchTasks = () => axios.get(API_URL);
export const addTask = (title) => axios.post(API_URL, { title });
export const toggleTask = (id) => axios.patch(`${API_URL}/${id}`);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);