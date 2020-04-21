const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModel = new Schema(
  {
    author: { type: String },
    genre: { type: String },
    title: { type: String },
    read: { type: String },
  }
);

module.exports = mongoose.model('Book', bookModel);