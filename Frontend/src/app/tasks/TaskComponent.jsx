import { useState, useEffect } from 'react';
import { fetchTasks, addTask, toggleTask, deleteTask } from './TaskService.js';

function TaskComponent() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchTasks()
            .then(({ data }) => {
                setTasks(data);
            })
            .catch((error) => console.error('Error fetching tasks:', error));
    }, []);

    const handleAddTask = async () => {
        try {
            const { data } = await addTask(title);
            setTasks([...tasks, data]);
            setTitle('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const handleToggleTask = async (id) => {
        try {
            const { data } = await toggleTask(id);
            setTasks(tasks.map(task => task._id === id ? data : task));
        } catch (error) {
            console.error('Error toggling task:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="max-w-md w-full bg-white shadow-md rounded p-4">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded w-full mb-2"
                placeholder="Nova tarefa"
            />
            <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded w-full mb-4">Adicionar</button>
            <ul className="mt-4">
                {tasks.map(task => (
                    <li key={task._id} className="flex justify-between p-2 border-b">
                        <span
                            onClick={() => handleToggleTask(task._id)}
                            className={`cursor-pointer ${task.completed ? "line-through" : ""}`}
                            style={{ color: 'black' }}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => handleDeleteTask(task._id)} className="text-red-500">X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskComponent;
