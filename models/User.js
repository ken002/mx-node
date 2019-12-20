const db = require('../db');

module.exports = db.defineModel('user', {
    account: {//账号
        type: db.STRING(20),
        unique: true
    },
    question:db.STRING(100),//密保
    password:db.STRING(100),//密码
    avatar:db.STRING(100),//头像
    isManager:db.BOOLEAN,//管理员 0不是 1是
});