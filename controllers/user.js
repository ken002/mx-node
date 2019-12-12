const user = require('../services/user-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/user': async (ctx, next) => {
        console.log('新增用户...');
        
        const params=ctx.request.body;
        const result = await user.createUser({
            openId:params.openId,
            nickName:params.nickName,
            gender:params.gender,
            city:params.city,
            province:params.province,
            country:params.country,
            avatarUrl:params.avatarUrl,
            unionId:params.unionId,
        });
   
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
    //改
    'PUT /api/user': async (ctx, next) => {
        console.log('修改用户...');

        const params=ctx.request.body;
        const result = await user.updateUser({
            openId:params.openId,
            nickName:params.nickName,
            gender:params.gender,
            city:params.city,
            province:params.province,
            country:params.country,
            avatarUrl:params.avatarUrl,
            unionId:params.unionId,
        });
   
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
    'GET /api/user/:id': async (ctx, next) => {
        console.log('查询用户信息...');
        
        const result = await user.getUser(ctx.params.id);
      
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
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