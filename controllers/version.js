const version = require('../services/version-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/version': async (ctx, next) => {
        console.log('新增版本...');
    
        const result = await version.createVersion({
            platform: ctx.request.body.platform,
            appVersion: ctx.request.body.appVersion,
            realAppVersion: ctx.request.body.realAppVersion,
            updateContent: ctx.request.body.updateContent,
            allUpdate: ctx.request.body.allUpdate,
            downloadUrl: ctx.request.body.downloadUrl
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
    'DELETE /api/version/:id': async (ctx, next) => {
        console.log('删除版本...');
        const result = await version.deleteVersion(ctx.params.id);
     
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
   
    //查列表
    'GET /api/versions': async (ctx, next) => {
        console.log('版本列表...');
        let result=null;
        if(ctx.request.query.checkVersion){
            result = await version.getNewVersions(ctx.request.query.platform);
        }else{
            result = await version.getVersions();
        }
       
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    }

};