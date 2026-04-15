const dashboardController = require('../controller/dashboardController');

const router = require('express').Router();

router.get('/stats', dashboardController.stats);

module.exports = router;