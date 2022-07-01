const rarity = require('../controllers/rarity/routes');
const cardSet = require('../controllers/cardSet/routes');

const routes = function (server) {
  server.use('/rarity', rarity);
  server.use('/cardSet', cardSet);
  
};

module.exports = routes;