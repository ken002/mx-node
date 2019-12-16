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
            code:1,
            data:result,
            message:'新增成功'
        });
    },
    //删
    'DELETE /api/color/:id': async (ctx, next) => {
        console.log('删除色板...');
        const result = await color.deleteColor(ctx.params.id);
     
        if (result) {
            ctx.rest({
                code:1,
                data:result,
                message:'删除成功'
            });
        } else {
            throw new APIError(0, '要删除的色板不存在');
        }
    },
   
    //查列表
    'GET /api/colors': async (ctx, next) => {
        console.log('色板列表...');
        const result = await color.getColors();
     
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    }

};