const { Router } = require('express');
const controllers = require('./controller');

const router = Router();

router.get('/:rare', controllers.rarity);
router.get('/', controllers.all);



module.exports = router