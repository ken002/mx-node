const color = require('../services/color-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/color': async (ctx, next) => {
        console.log('新增色板...');
    
        const result = await color.createColor({
            image: ctx.request.body.image,
            price: ctx.request.body.price,
        });
        ctx.rest({
            code: 1,
            message: '添加成功',
            data: result,
        });
    },
    //删
    'DELETE /api/color/:id': async (ctx, next) => {
        console.log('删除色板...');
        const result = await color.deleteColor(ctx.params.id);
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
   
    //查列表
    'GET /api/colors': async (ctx, next) => {
        console.log('色板列表...');
        const colors = await color.getColors();
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: colors,
        });
    }

};