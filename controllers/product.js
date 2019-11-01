const product = require('../services/product-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/products': async (ctx, next) => {
        console.log('新增商品...');
        const p = await product.createProduct({
            name: ctx.request.body.name,
            image: ctx.request.body.image,
            intro: ctx.request.body.intro,
            online: ctx.request.body.online,
            hot: ctx.request.body.hot,
            category: ctx.request.body.category
        });
        ctx.rest({
            code:1,
            message:'添加成功',
            data:p,
        });
    },
    //删
    'DELETE /api/products/:id': async (ctx, next) => {

    },
    //改
    'PUT /api/products/:id': async (ctx, next) => {

    },
    //查某个
    'GET /api/products/:id': async (ctx, next) => {

    },
    //查列表
    'GET /api/products': async (ctx, next) => {
        console.log('查询商品列表...');
        const page=ctx.request.query.page;
        const limit=ctx.request.query.limit;
        const offset = (page - 1) * limit;
        const products = await product.getProducts({
            limit,
            offset
        });
        ctx.rest({
            code:1,
            message:'查询成功',
            data:products,
        });
    },
};