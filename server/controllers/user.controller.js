const userService = require('../service/user.service');

class UserController {
    async login(req, res) {
        try {

        } catch (e) {
            
        }
    }

    async register(req, res) {
        try {
            const { email, password } = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.accessToken, {maxAge: 10 * 24 * 60 * 1000, httpOnly: true});
            return res.status(200).json(userData);
        } catch (e) {
            console.log(e);
        }
    }

    async logout(req, res) {
        try {

        } catch (e) {

        }
    }

    async refreshToken(req, res) {
        try {

        } catch (e) {

        }
    }
}

module.exports = new UserController();