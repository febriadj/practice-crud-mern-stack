const router = require('express').Router()

// middleware controllers
router.use('/api', require('./controllers').getList)

router.use((req, res, next) => {
  res.status(404).json({ body: 'Opps 404, Page Not found' })
})

module.exports = router