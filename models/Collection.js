const db = require('../db');

module.exports = db.defineModel('collection', {
   userId:db.STRING(20),
   productId:db.STRING(50)
});