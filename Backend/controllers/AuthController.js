import * as AuthService from '../services/AuthService.js';

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        await AuthService.register(username, password);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await AuthService.login(username, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};