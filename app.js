const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const logger = require('koa-logger')
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const rest = require('./rest');

app.use(logger());
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

app.listen(81);
console.log('app is running');

