const mongoose = require('mongoose')
const shortId = require('shortid')

const Schema = mongoose.Schema

const UrlSchema = new Schema({
  full: {
    type: String,
    unique: true,
    required: true
  },
  short: {
    type: String,
    unique: true,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('Url', UrlSchema)
