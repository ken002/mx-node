const db = require('../db');

module.exports = db.defineModel('notice', {
    title: db.STRING(100),//标题
    content: db.STRING(100),//内容
});