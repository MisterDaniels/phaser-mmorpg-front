const { StatusCodes } = require("http-status-codes");
const path = require("path");
const axios = require("axios");

module.exports = {

    login(req, res) {
        res.sendFile(path.join(__sourceDir, '/views/login.html'));
    },

    signUp(req, res) {
        res.sendFile(path.join(__sourceDir, '/views/signup.html'));
    },

    forgotPassword(req, res) {
        res.sendFile(path.join(__sourceDir, '/views/forgot-password.html'));
    },

    resetPassword(req, res) {
        res.sendFile(path.join(__sourceDir, '/views/reset-password.html'));
    },

    game(req, res) {
        axios.get('http://localhost:9006/check-user', {
            headers: {
                Cookie: req.headers.cookie
            }
        }).then(() => {
            res.sendFile(path.join(__sourceDir, '/views/game.html'));
        }).catch((err) => {
            res.redirect('/login');
        });
    },

    logout(req, res) {
        axios.post('http://localhost:9006/logout', {}, {
            headers: {
                Cookie: req.headers.cookie
            }
        }).then(() => {
            res.clearCookie('jwt');
            res.clearCookie('refreshJwt');

            res.sendFile(path.join(__sourceDir, '/views/logout.html'))
        }).catch((err) => {            
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
                message: err.message
            });
        });
    }

}