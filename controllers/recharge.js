const recharge = require('../services/recharge-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/recharge': async (ctx, next) => {
        console.log('新增充值项...');
    
        const result = await recharge.createRecharge({
            intro: ctx.request.body.intro,
        });
        console.log(result);
        if(result){
            ctx.rest({
                code: 1,
                message: '添加成功',
                data: result,
            });
        }else{
            ctx.rest({
                code: 0,
                message: '添加失败',
                data: result,
            });
        }
    },
    //删
    'DELETE /api/recharge/:id': async (ctx, next) => {
        console.log('删除某充值项...');
        const result = await recharge.deleteRecharge(ctx.params.id);
        console.log(result);
        if(result===1){
            ctx.rest({
                code: 1,
                message: '删除成功',
                data: result,
            });
        }else{
            ctx.rest({
                code: 1,
                message: '删除失败',
                data: result,
            });
        }
    },
    //改
    'PUT /api/recharge/:id': async (ctx, next) => {
        console.log('修改某充值项...');
        const result = await recharge.updateRecharge({
            intro: ctx.request.body.intro,
        }, ctx.params.id);
        console.log(result);
        if(result===[0]){
            ctx.rest({
                code: 1,
                message: '修改成功',
                data: result,
            });
        }else{
            ctx.rest({
                code: 1,
                message: '修改失败',
                data: result,
            });
        }
        
    },
    //查某个
    'GET /api/recharge/:id': async (ctx, next) => {
        console.log('查询某优惠...');
        const result = await recharge.getRecharge(ctx.params.id);
        console.log(result);
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    },
    //查列表
    'GET /api/recharges': async (ctx, next) => {
        console.log('充值优惠列表...');
        const result = await recharge.getRecharges();
        console.log(result);
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    }

};