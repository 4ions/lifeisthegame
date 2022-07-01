const { Router } = require('express');
const controllers = require('./controller');

const router = Router();

router.get('/', controllers.cardSet);


module.exports = router