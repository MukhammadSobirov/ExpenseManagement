const router = require('express').Router();
const userControllerRoute = require('../controller/userController');

router.route('/').post(userControllerRoute.signUp);

module.exports = router;