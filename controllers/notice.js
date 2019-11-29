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
            code: 1,
            message: '添加成功',
            data: result,
        });
    },
    //删
    'DELETE /api/notice/:id': async (ctx, next) => {
        console.log('删除某公告...');
        const result = await notice.deleteNotice(ctx.params.id);
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
    //改
    'PUT /api/notice/:id': async (ctx, next) => {
        console.log('修改公告...');
        const result = await notice.updateNotice({
            title: ctx.request.body.title,
            content: ctx.request.body.content,
        }, ctx.params.id);
        if (result) {
            ctx.rest({
                code: 1,
                message: '修改成功',
                data: null,
            });
        } else {
            ctx.rest({
                code: 1,
                message: '修改失败',
                data: null,
            });
        }

    },
    //查某个
    'GET /api/notice/:id': async (ctx, next) => {
        console.log('查询某公告...');
        const result = await notice.getNotice(ctx.params.id);
        let res = null;
        if (result.length === 1) {
            res = result[0];
        }
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: res,
        });
    },
    //查列表
    'GET /api/notices': async (ctx, next) => {
        console.log('公告列表...');
        const ads = await notice.getNotices();
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: ads,
        });
    }

};