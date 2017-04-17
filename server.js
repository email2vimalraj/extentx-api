import express from 'express';
import mongoose from 'mongoose';

import { config } from './config';

const APP_PORT = 4000;

const server = express();

server.get('/', function (req, res) {
    res.send('Hello World!');
});

server.listen(APP_PORT, () => console.log(`Server listening at http://localhost:${APP_PORT}`));
