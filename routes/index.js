'use strict'

const router = require('express').Router()

router.get('/', (_, res) => {
  res.json({ message: 'Hello!' })
})

router.post('/', (req, res) => {
  res.send(req.body.message)
})

module.exports = router
