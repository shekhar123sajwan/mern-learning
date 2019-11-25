const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
const uri = process.env.ALTS_URI;
app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('connection created successfully');
});

app.listen(port, () => {
    console.log('connecting to the server ' + port);
});

const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

app.use('/exercise', exerciseRouter);
app.use('/user', userRouter);