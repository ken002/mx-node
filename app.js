const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./rest');
const fs = require('fs');
const path = require('path');

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

app.listen(80);
console.log('app started at port 80...');

