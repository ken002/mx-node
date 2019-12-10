const db = require('../db');

module.exports = db.defineModel('recharge', {
    intro: db.STRING(100),//描述
});