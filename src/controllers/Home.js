const { StatusCodes } = require("http-status-codes");
const path = require("path");

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
    }

}