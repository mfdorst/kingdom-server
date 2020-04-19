'use strict'

const app = require('express')()
const config = require('./config')
const mongoose = require('mongoose')

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

app.listen(config.port, () => console.log(`Listening at http://localhost:${config.port}`))
