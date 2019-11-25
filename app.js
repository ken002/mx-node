const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./rest');
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const enforceHttps = require('koa-sslify').default;

// Force HTTPS on all page
app.use(enforceHttps());
app.use(cors());
app.use(koaBody({
    multipart: true,
    formidable: {
        // uploadDir: path.join(__dirname, 'upload'),<--如果配置了此处点击上传按钮会直接上传，就无法在后端上传代码处进行数据处理
        maxFieldsSize: 200 * 1024 * 1024,
    }
}));
app.use(bodyParser());
app.use(rest.restify());
app.use(controller());

// SSL options
const options = {
    key: fs.readFileSync('./https/3139749_jinluoyang.top.key'),  //ssl文件路径
    cert: fs.readFileSync('./https/3139749_jinluoyang.top.pem')  //ssl文件路径
};
 
http.createServer(app.callback()).listen(81);
https.createServer(options, app.callback()).listen(443);

console.log('server is running');

