const recharge = require('../services/recharge-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/recharge': async (ctx, next) => {
        console.log('新增充值项...');
    
        const result = await recharge.createRecharge({
            intro: ctx.request.body.intro,
        });
       
        ctx.rest({
            code:1,
            data:result,
            message:'新增成功'
        });
    },
    //删
    'DELETE /api/recharge/:id': async (ctx, next) => {
        console.log('删除某充值项...');
        const result = await recharge.deleteRecharge(ctx.params.id);
       
        if (result) {
            ctx.rest({
                code:1,
                data:result,
                message:'删除成功'
            });
        } else {
            throw new APIError(0, '要删除的优惠项不存在');
        }
    },
    //改
    'PUT /api/recharge/:id': async (ctx, next) => {
        console.log('修改某充值项...');
        const result = await recharge.updateRecharge({
            intro: ctx.request.body.intro,
        }, ctx.params.id);
      
        ctx.rest({
            code:1,
            data:result,
            message:'修改成功'
        });
        
    },
    //查某个
    'GET /api/recharge/:id': async (ctx, next) => {
        console.log('查询某优惠...');
        const result = await recharge.getRecharge(ctx.params.id);
      
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    },
    //查列表
    'GET /api/recharges': async (ctx, next) => {
        console.log('充值优惠列表...');
        const result = await recharge.getRecharges();
       
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    }

};