const product = require('../services/product-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/products': async (ctx, next) => {
        console.log('新增商品...');
        const result = await product.createProduct({
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
            code:1,
            data:result,
            message:'新增成功'
        });
    },
    //删
    'DELETE /api/products/:id': async (ctx, next) => {
        console.log('删除某商品...');
        const result = await product.deleteProduct(ctx.params.id);
        
        if (result) {
            ctx.rest({
                code:1,
                data:result,
                message:'删除成功'
            });
        } else {
            throw new APIError(0, '要删除的商品不存在');
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
        
        ctx.rest({
            code:1,
            data:result,
            message:'修改成功'
        });

    },
    //查某个
    'GET /api/products/:id': async (ctx, next) => {
        console.log('查询某商品...');
        const result = await product.getProduct(ctx.params.id);
      
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    },
    //查列表（按类别）
    'GET /api/productsByCategory/:id': async (ctx, next) => {
        console.log('商品列表(按类别，不分页)...');
        const result = await product.getProductsByCategory(ctx.params.id);
      
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
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

        let result = null;
        if (name!=='null') {
            result = await product.getProductsByName({//名称搜索
                limit,
                offset,
                name
            });
        } else if(pType!=='null'){
            result = await product.getProductsByType({//查询本店/流行
                limit,
                offset,
                pType
            });
        } else if(online!=='null'){
            result = await product.getProductsOnline({//查询上架的/下架的
                limit,
                offset,
                online
            });
        } else {
            result = await product.getProducts({//查询所有
                limit,
                offset
            });
        }
       
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    }
};