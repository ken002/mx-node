const db = require('../db');

module.exports = db.defineModel('user', {
    account: {//账号
        type: db.STRING(20),
        unique: true
    },
    question:db.STRING(20),//密保
    password:db.STRING(20),//密码
});