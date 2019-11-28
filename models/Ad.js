const db = require('../db');

module.exports = db.defineModel('ad', {
    image: db.STRING(100),//图片
    intro: db.STRING(100),//描述
});