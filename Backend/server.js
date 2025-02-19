import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes/TaskRoutes.js';
import authRoutes from './routes/AuthRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', taskRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/tasks_db', {});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));