const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI', { useUnifiedTopology: true });


const port = process.env.PORT || 3000;
const Book = require('./models/bookModels');

const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());




app.use('/api', bookRouter);


app.get('/', (req, res) => {
  res.send('Welcome to my API Dexter ewe wss')
});

app.listen(port, () => {
  console.log('Running server' + port);
});