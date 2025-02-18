import express from 'express';
import { createTask, getAllTasks, toggleTaskCompletion, deleteTask } from '../controllers/TaskController.js';

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.patch('/tasks/:id', toggleTaskCompletion);
router.delete('/tasks/:id', deleteTask);

export default router;