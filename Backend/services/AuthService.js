import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as AuthRepository from '../repositories/AuthRepository.js';

const JWT_KEY = process.env.JWT_KEY;

export const register = async (username, password) => {
    const existingUser = await AuthRepository.findUserByUsername(username);
    if (existingUser) throw new Error('User already exists');

    const passwordHash = await bcrypt.hash(password, 10);
    return await AuthRepository.createUser(username, passwordHash);
};

export const login = async (username, password) => {
    const user = await AuthRepository.findUserByUsername(username);
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_KEY, { expiresIn: '1h' });
    return token;
};
