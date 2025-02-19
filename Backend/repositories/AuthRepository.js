import User from '../models/User.js';

export const findUserByUsername = async (username) => {
    return await User.findOne({ username });
};

export const createUser = async (username, passwordHash) => {
    return await User.create({ username, password: passwordHash });
};
