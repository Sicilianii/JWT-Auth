const jwt = require("jsonwebtoken");
const Token = require("../models/token.model");

class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '10m'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '10d'});
        return { accessToken, refreshToken };
    }

    async saveToken(userID, refreshToken) {
        const tokenData = await Token.findOne({user: userID});
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await Token.create({user: userID, refreshToken});
        return token;
    }
}

module.exports = new TokenService();