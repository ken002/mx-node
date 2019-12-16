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
     
        ctx.rest({
            code:1,
            data:result,
            message:'新增成功'
        });
    },
    //删
    'DELETE /api/notice/:id': async (ctx, next) => {
        console.log('删除某公告...');
        const result = await notice.deleteNotice(ctx.params.id);
       
        if (result) {
            ctx.rest({
                code:1,
                data:result,
                message:'删除成功'
            });
        } else {
            throw new APIError(0, '要删除的公告不存在');
        }
    },
    //改
    'PUT /api/notice/:id': async (ctx, next) => {
        console.log('修改公告...');
        const result = await notice.updateNotice({
            title: ctx.request.body.title,
            content: ctx.request.body.content,
        }, ctx.params.id);
       
        ctx.rest({
            code:1,
            data:result,
            message:'修改成功'
        });

    },
    //查某个
    'GET /api/notice/:id': async (ctx, next) => {
        console.log('查询某公告...');
        const result = await notice.getNotice(ctx.params.id);
       
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    },
    //查列表
    'GET /api/notices': async (ctx, next) => {
        console.log('公告列表...');
        const result = await notice.getNotices();
        
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    }

};