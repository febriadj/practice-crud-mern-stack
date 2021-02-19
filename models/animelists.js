const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animeListsSchema = new Schema({
  title: { 
    type: String, 
    unique: true, 
    required: true 
  },
  author: String,
  rating: Number,
  synopsis: String,
  url: String,
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('animelist', animeListsSchema)