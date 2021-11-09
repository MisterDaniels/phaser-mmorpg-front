const { celebrate, Segments, Joi } = require('celebrate');
var express = require('express');
const { StatusCodes } = require('http-status-codes');
var routes = express.Router();

const { HomeController } = require('./controllers');

routes.get(['/', '/login', '/signin'], HomeController.login);
routes.get('/signup', HomeController.signUp);
routes.get('/forgot-password', HomeController.forgotPassword);
routes.get('/reset-password', HomeController.resetPassword);
routes.get(['/game', '/launcher'], HomeController.game);
routes.get('/logout', HomeController.logout);

module.exports = routes;