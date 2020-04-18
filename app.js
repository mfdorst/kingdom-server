'use strict'

const mongoose = require('mongoose')
const app = require('express')()

app.use('/', require('./routes/index'))

mongoose
  .connect('mongodb://localhost:27017/kingdom', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to database.')
    // Send out an event that can be listened to elsewhere
    app.emit('event:database-connected')
    app.set('database-connected', true)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
