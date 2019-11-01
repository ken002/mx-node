const db = require('../db');

module.exports = db.defineModel('category', {
    name: {//类别
        type: db.STRING(50),
        unique: true
    }
});