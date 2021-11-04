const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { StatusCodes } = require('http-status-codes');
const { errors } = require('celebrate');
const path = require('path');

require('dotenv').config();

global.__basedir = path.join(__dirname, '../');
global.__sourceDir = path.join(__dirname);

const routes = require('./routes');

const app = express();
const port = process.env.SERVER_PORT || 9001;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}));

app.use(express.static(`${ __sourceDir }/assets`))
app.use(express.static(`${ __basedir }/node_modules/bootstrap/dist`));

app.use(routes);

app.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({
        statusCode: StatusCodes.NOT_FOUND,
        message: 'Page not found'
    });
});

app.use(errors());

app.listen(port, () => {
    console.log(`[ϟ SERVER] is running on port ${ port }`);
});