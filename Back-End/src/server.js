const express = require('express');
const cors = require('cors');
const database = require('./config/database');
const routes = require('./routes');

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'authorization'],
    credentials: true,
    preflightContinue: false

}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ response: 'Application started!' });
});

app.get('/api-docs', (req, res) => {
    res.send({ response: 'Application started!' });
});

app.use(routes);

database.sync({ force: false })
    .then(() => {
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });
