const user = require('../services/user-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/user': async (ctx, next) => {
        console.log('新增用户...');
        
        const params=ctx.request.body;
        const result = await user.createUser({
            account:params.account,
            question:params.question,
            password:params.password
        });
   
        if(result){
            ctx.rest({
                code: 1,
                message: '注册成功',
                data: result,
            });
        }else{
            ctx.rest({
                code: 0,
                message: '注册失败，用户已存在',
                data: result,
            });
        }
    },
    //改
    'PUT /api/user': async (ctx, next) => {
        console.log('修改密码...');

        const params=ctx.request.body;
        const result = await user.updateUser({
            account:params.account,
            question:params.question,
            password:params.password
        });
   
        if(result[0].length>0){
            ctx.rest({
                code: 1,
                message: '修改成功',
                data: result[0],
            });
        }else{
            ctx.rest({
                code: 0,
                message: '修改失败，账号或密保错误',
                data: result,
            });
        }

    },
    //查某个
    'GET /api/user/:id': async (ctx, next) => {
        console.log('查询用户信息...');
        
        const result = await user.getUser(ctx.params.id);
      
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    },
    //查某个（根据账号密码）
    'GET /api/userByAccountAndPass': async (ctx, next) => {
        console.log('登录...');
        const params=ctx.request.query;

        const result = await user.getUserByAccountAndPass({
            account:params.account,
            password:params.password
        });
        
        if(result[0].length>0){
            ctx.rest({
                code: 1,
                message: '登录成功',
                data: result[0],
            });
        }else{
            ctx.rest({
                code: 0,
                message: '登录失败，账号或密码错误',
                data: result,
            });
        }
    },

    //查列表
    'GET /api/users': async (ctx, next) => {
        console.log('用户列表...');

        const page = ctx.request.query.page;
        const limit = ctx.request.query.limit;
        const offset = (page - 1) * limit;
        
        const result = await user.getUsers({
            limit,
            offset
        });

        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    }

};