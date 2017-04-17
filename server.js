import express from 'express';
import mongoose from 'mongoose';

import { config } from './config';

const APP_PORT = 4000;
const MONGO_URI = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI)
    .then(() => {console.log(`DB Success`)})
    .catch((error) => {console.log(`Error in DB Connection: ${error}`)});

const server = express();

server.get('/', function (req, res) {
    res.send('Hello World!');
});

server.listen(APP_PORT, () => console.log(`Server listening at http://localhost:${APP_PORT}`));
