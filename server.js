import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { config } from './config';
import { schema } from './src/schema';

const APP_PORT = 4000;
const MONGO_URI = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI)
    .then(() => {console.log(`DB Success`)})
    .catch((error) => {console.log(`Error in DB Connection: ${error}`)});

const server = express();
server.use('*', cors({ origin: 'http://localhost:3000' }));

server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

server.get('/', function (req, res) {
    res.send('Hello World!');
});

server.listen(APP_PORT, () => console.log(`Server listening at http://localhost:${APP_PORT}`));
