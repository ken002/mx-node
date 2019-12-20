const user = require('../services/user-service');
const APIError = require('../rest').APIError;
const crypto = require('crypto');
const config = require('../config');

module.exports = {
    //增
    'POST /api/user': async (ctx, next) => {
        console.log('新增用户...');
        const params=ctx.request.body;
        const hash = crypto.createHash('md5');
        const newPassword = hash.update(params.password).digest('hex');
        const hash2 = crypto.createHash('md5');
        const newQuestion = hash2.update(params.question).digest('hex');

        const result = await user.createUser({
            account:params.account,
            question:newQuestion,
            password:newPassword,
            isManager:0,
            avatar:`http://${config.host}:8081/public/upload/logo.png`
        });
        ctx.rest({
            code:1,
            data:result,
            message:'注册成功'
        });
    },
    //改
    'PUT /api/user': async (ctx, next) => {
        console.log('修改信息...');

        const params=ctx.request.body;
       
        if(params.password!==undefined){
            const hash = crypto.createHash('md5');
            const newPassword = hash.update(params.password).digest('hex');
            const hash2 = crypto.createHash('md5');
            const newQuestion = hash2.update(params.question).digest('hex');
            const result = await user.updateUser({
                account:params.account,
                question:newQuestion,
                password:newPassword
            });
            if(result===null){
                ctx.rest({
                    code:0,
                    data:null,
                    message:'账号或密保错误'
                });
            }else{
                ctx.rest({
                    code:1,
                    data:result,
                    message:'修改密码成功'
                });
            }
        }
        if(params.avatar!==undefined){
            const result = await user.updateUserAvatar({
                avatar:params.avatar
            },params.id);
            ctx.rest({
                code:1,
                data:result,
                message:'修改头像成功'
            });
        }
    },
    //查某个（根据账号密码）
    'GET /api/userByAccountAndPass': async (ctx, next) => {
        console.log('登录...');
        const params=ctx.request.query;
        const hash = crypto.createHash('md5');
        const newPassword = hash.update(params.password).digest('hex');
        const result = await user.getUserByAccountAndPass({
            account:params.account,
            password:newPassword
        });

        if(result[0].length===1){
            ctx.rest({
                code:1,
                data:result[0][0],
                message:'登录成功'
            });
        }else{
            ctx.rest({
                code:0,
                data:null,
                message:'账号或密码错误'
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
            code:1,
            data:result,
            message:'查询成功'
        });
    }

};