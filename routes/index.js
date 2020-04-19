'use strict'

const router = require('express').Router()

router.get('/', (_, res) => {
  res.json({ message: 'Hello!' })
})

module.exports = router
