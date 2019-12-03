const db = require('../db');

module.exports = db.defineModel('product', {
    name: db.STRING(100),//名称
    image: db.STRING(100),//图片
    video:  db.STRING(100),//视频
    intro: db.STRING(100),//描述
    online: db.BOOLEAN,//是否上架
    pType: db.INTEGER,//类型。 0当季流行  1本地热款
    showType: db.INTEGER,//前端展示类型。 0图片  1视频
    category: db.STRING(200)//所属类别
});