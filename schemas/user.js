'use strict'

const { model, Schema } = require('mongoose')

const User = new Schema({
  username: { type: String, unique: true },
})

module.exports = model('User', User)
