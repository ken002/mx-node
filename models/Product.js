const db = require('../db');

module.exports = db.defineModel('product', {
    name: db.STRING(100),//名称
    image: db.STRING(100),//图片
    intro: db.STRING(100),//描述
    online: db.BOOLEAN,//是否上架
    hot: db.BOOLEAN,//是否热门
    category: db.STRING(200)//所属类别
});