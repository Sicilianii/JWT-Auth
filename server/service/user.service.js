const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const tokenService = require('../service/token.service');
const userDTO = require('../dtos/user-dto');

class UserService {
    async registration(email, password) {
        const user = await User.findOne({email});
        if (!user) {

            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = await User.create({email, password: hashedPassword});
            const userData = new User(newUser);
            const token = tokenService.generateToken({...userData});
            await tokenService.saveToken(userData.id, token.refreshToken);

            return {
                ...token,
                user: userData
            };
        } else throw new Error(`Пользователь с такой почтой "${email}" уже существует`)
    }
}

module.exports = new UserService();