const db = require('../db');

module.exports = db.defineModel('color', {
    image: db.STRING(100),//图片
    price: db.STRING(50),//价格
});