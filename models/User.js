const db = require('../db');

module.exports = db.defineModel('user', {
    openId:db.STRING(100),
    nickName:db.STRING(100),
    gender:db.STRING(10),
    city:db.STRING(50),
    province:db.STRING(50),
    country:db.STRING(50),
    avatarUrl:db.STRING(200),
    unionId:db.STRING(100),
});