import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskComponent from './app/tasks/TaskComponent';
import AuthComponent from './app/auth/AuthComponent';
import { getToken } from './app/auth/AuthService';

function App() {
    const queryClient = useQueryClient();
    const [token, setToken] = useState(getToken());

    const handleAuth = (newToken) => {
        setToken(newToken);
        queryClient.invalidateQueries();
    };

    const handleLogout = () => {
        setToken(null);
        queryClient.invalidateQueries();
    };

    return (
        <Router>
            <div className="flex flex-col items-center justify-start h-screen bg-gray-100 pt-8">
                <h1 className="text-3xl font-bold text-black mb-4">Tarefas</h1>
                <Routes>
                    <Route
                        path="/"
                        element={
                            token ? (
                                <TaskComponent onLogout={handleLogout} />
                            ) : (
                                <AuthComponent onAuth={handleAuth} />
                            )
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
