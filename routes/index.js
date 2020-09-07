const router = require('express').Router();
const indexControllerRoute = require('../controller/indexController');

router.route('/').get(indexControllerRoute.IndexAPI);

module.exports = router;