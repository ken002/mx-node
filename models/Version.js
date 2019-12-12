const db = require('../db');

module.exports = db.defineModel('version', {
    platform:db.INTEGER,//0ios 1android
    appVersion:db.INTEGER,//版本号
    updateContent:db.STRING(200),//更新内容
    downloadUrl:db.STRING(100),//下载地址
    allUpdate:db.INTEGER//0热更新 1整包升级 
});