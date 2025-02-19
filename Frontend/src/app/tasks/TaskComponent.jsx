import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTasks, addTask, toggleTask, deleteTask } from './TaskService.js';
import { logoutUser } from '../auth/AuthService.js';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function TaskComponent({ onLogout }) {
    const [title, setTitle] = useState('');
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // Buscar tarefas
    const { data: tasks = [], isLoading, error } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const { data } = await fetchTasks();
            return data;
        }
    });

    // Criar tarefa
    const addTaskMutation = useMutation({
        mutationFn: addTask,
        onSuccess: () => queryClient.invalidateQueries(['tasks']),
    });

    // Alternar conclusão da tarefa
    const toggleTaskMutation = useMutation({
        mutationFn: toggleTask,
        onSuccess: () => queryClient.invalidateQueries(['tasks']),
    });

    // Apagar tarefa
    const deleteTaskMutation = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => queryClient.invalidateQueries(['tasks']),
    });

    const handleAddTask = () => {
        if (title.trim() !== '') {
            addTaskMutation.mutate(title);
            setTitle('');
        }
    };

    if (isLoading) return <p>Carregando tarefas...</p>;
    if (error) return <p>Erro ao carregar tarefas.</p>;

    return (
        <div className="max-w-md w-full bg-white shadow-md rounded p-4">
            <button
                onClick={() => {
                    logoutUser();
                    onLogout();
                    navigate('/');
                }}
                className="text-red-500 mb-4"
            >
                Sair
            </button>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded w-full mb-2"
                placeholder="Nova tarefa"
            />
            <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded w-full mb-4">
                Adicionar
            </button>
            <ul className="mt-4">
                {tasks.map(task => (
                    <li key={task._id} className="flex justify-between p-2 border-b">
                        <span
                            onClick={() => toggleTaskMutation.mutate(task._id)}
                            className={`cursor-pointer ${task.completed ? "line-through" : ""}`}
                            style={{ color: 'black' }}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => deleteTaskMutation.mutate(task._id)} className="text-red-500">X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskComponent;
