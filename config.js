//本机
var config = {
    dialect: 'mysql',
    database: 'mx_mj',
    username: 'root',
    password: '123456',
    host: 'localhost',
    port: 3306
};
//线上
// var config = {
//     dialect: 'mysql',
//     database: 'mx_mj_online',
//     username: 'dms',
//     password: 'Sjb0793881211@',
//     host: '120.26.73.52',
//     port: 3306
// };

module.exports = config;