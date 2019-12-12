const notice = require('../services/notice-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/notice': async (ctx, next) => {
        console.log('新增公告...');
    
        const result = await notice.createNotice({
            title: ctx.request.body.title,
            content: ctx.request.body.content,
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
    //删
    'DELETE /api/notice/:id': async (ctx, next) => {
        console.log('删除某公告...');
        const result = await notice.deleteNotice(ctx.params.id);
       
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
    'PUT /api/notice/:id': async (ctx, next) => {
        console.log('修改公告...');
        const result = await notice.updateNotice({
            title: ctx.request.body.title,
            content: ctx.request.body.content,
        }, ctx.params.id);
       
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
    'GET /api/notice/:id': async (ctx, next) => {
        console.log('查询某公告...');
        const result = await notice.getNotice(ctx.params.id);
       
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    },
    //查列表
    'GET /api/notices': async (ctx, next) => {
        console.log('公告列表...');
        const result = await notice.getNotices();
        
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    }

};