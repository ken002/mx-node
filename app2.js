const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./rest');

const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const sslify = require('koa-sslify').default;
app.use(sslify());

app.use(cors());
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFieldsSize: 200 * 1024 * 1024,
    }
}));
app.use(bodyParser());
app.use(rest.restify());
app.use(controller());

const options = {
    key: fs.readFileSync(path.join(__dirname, './https/3139749_jinluoyang.top.key')),
    cert: fs.readFileSync(path.join(__dirname, './https/3139749_jinluoyang.top.pem'))
};

const httpServer = http.createServer(app.callback());
httpServer.listen(81);
const httpsServer = https.createServer(options, app.callback());
httpsServer.listen(443);
console.log('app is running');

