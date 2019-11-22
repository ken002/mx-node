const db = require('../db');

module.exports = db.defineModel('product', {
    name: db.STRING(100),//名称
    image: db.STRING(100),//图片
    intro: db.STRING(100),//描述
    online: db.BOOLEAN,//是否上架
    pType: db.INTEGER,//类型。 0当季流行  1本地热款
    category: db.STRING(200)//所属类别
});