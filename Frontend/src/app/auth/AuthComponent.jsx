import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { registerUser, loginUser, logoutUser } from './AuthService.js';

function AuthComponent({ onAuth }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState('');

    const registerMutation = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            alert('Registo bem-sucedido! Agora faça login.');
            setIsRegister(false);
        },
        onError: () => setError('Erro ao registar usuário.'),
    });

    const loginMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => onAuth(data.token),
        onError: () => setError('Credenciais inválidas.'),
    });

    const handleAuth = (e) => {
        e.preventDefault();
        if (isRegister) {
            registerMutation.mutate({ username, password });
        } else {
            loginMutation.mutate({ username, password });
        }
    };

    return (
        <div className="max-w-md w-full bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold mb-4">{isRegister ? 'Registar' : 'Entrar'}</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleAuth}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded w-full mb-2"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded w-full mb-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    {isRegister ? 'Registar' : 'Entrar'}
                </button>
            </form>
            <div className="flex justify-between">
                <button onClick={() => setIsRegister(!isRegister)} className="text-blue-500 mt-2">
                    {isRegister ? 'Já tem conta? Entre aqui' : 'Não tem conta? Registe-se'}
                </button>
                <button onClick={logoutUser} className="text-red-500 mt-2">Sair</button>
            </div>
        </div>
    );
}

export default AuthComponent;
