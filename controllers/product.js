const product = require('../services/product-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/products': async (ctx, next) => {
        console.log('新增商品...');
        const p = await product.createProduct({
            name: ctx.request.body.name,
            image: ctx.request.body.image,
            video: ctx.request.body.video,
            intro: ctx.request.body.intro,
            online: ctx.request.body.online,
            pType: ctx.request.body.pType,
            showType: ctx.request.body.showType,
            category: ctx.request.body.category
        });
        ctx.rest({
            code: 1,
            message: '添加成功',
            data: p,
        });
    },
    //删
    'DELETE /api/products/:id': async (ctx, next) => {
        console.log('删除某商品...');
        const result = await product.deleteProduct(ctx.params.id);
        console.log(result);
        if (result) {
            ctx.rest({
                code: 1,
                message: '删除成功',
                data: null,
            });
        } else {
            ctx.rest({
                code: 0,
                message: '删除失败',
                data: null,
            });
        }
    },
    //改
    'PUT /api/products/:id': async (ctx, next) => {
        console.log('修改某商品...');
        const result = await product.updateProduct({
            name: ctx.request.body.name,
            image: ctx.request.body.image,
            video: ctx.request.body.video,
            intro: ctx.request.body.intro,
            online: ctx.request.body.online,
            pType: ctx.request.body.pType,
            showType: ctx.request.body.showType,
            category: ctx.request.body.category
        }, ctx.params.id);
        if (result) {
            ctx.rest({
                code: 1,
                message: '修改成功',
                data: null,
            });
        } else {
            ctx.rest({
                code: 1,
                message: '修改失败',
                data: null,
            });
        }

    },
    //查某个
    'GET /api/products/:id': async (ctx, next) => {
        console.log('查询某商品...');
        const products = await product.getProduct(ctx.params.id);
        let p = null;
        if (products.length === 1) {
            p = products[0];
        }
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: p,
        });
    },
    //查列表（按类别）
    'GET /api/productsByCategory/:id': async (ctx, next) => {
        console.log('商品列表(按类别，不分页)...');
        const products = await product.getProductsByCategory(ctx.params.id);
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: products,
        });
    },
    //查列表
    'GET /api/products': async (ctx, next) => {
        console.log('商品列表...');
        const name = ctx.request.query.name;
        const pType = ctx.request.query.pType;
        const online = ctx.request.query.online;
        const page = ctx.request.query.page;
        const limit = ctx.request.query.limit;
        const offset = (page - 1) * limit;

        let products = null;
        if (name!=='null') {
            products = await product.getProductsByName({//名称搜索
                limit,
                offset,
                name
            });
        } else if(pType!=='null'){
            products = await product.getProductsByType({//查询本店/流行
                limit,
                offset,
                pType
            });
        } else if(online!=='null'){
            products = await product.getProductsOnline({//查询上架的/下架的
                limit,
                offset,
                online
            });
        } else {
            products = await product.getProducts({//查询所有
                limit,
                offset
            });
        }
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: products,
        });
    }
};