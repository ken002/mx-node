const collection = require('../services/collection-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/collection': async (ctx, next) => {
        console.log('新增收藏...');
    
        const result = await collection.createCollection({
            userId: ctx.request.body.userId,
            productId: ctx.request.body.productId,
        });
     
        ctx.rest({
            code:1,
            data:result,
            message:'新增成功'
        });
    },
    //删
    'DELETE /api/collection/:id': async (ctx, next) => {
        console.log('删除某收藏...');
        const result = await collection.deleteCollection(ctx.params.id);
       
        if (result) {
            ctx.rest({
                code:1,
                data:result,
                message:'删除成功'
            });
        } else {
            throw new APIError(0, '该收藏不存在');
        }
    },
    //查询是否收藏
    'GET /api/isCollected': async (ctx, next) => {
        console.log('查询是否收藏...');
        const result = await collection.getIsCollected(ctx.request.query.userId,ctx.request.query.productId);

        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    },
     //查列表
     'GET /api/collections': async (ctx, next) => {
        console.log('查询我的收藏列表...');

        const page = ctx.request.query.page;
        const limit = ctx.request.query.limit;
        const userId = ctx.request.query.userId;
        const offset = (page - 1) * limit;
        
        const result = await collection.getCollections({
            limit,
            offset,
            userId
        });
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    }
};