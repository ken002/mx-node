const ad = require('../services/ad-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/ad': async (ctx, next) => {
        console.log('新增广告...');
    
        const result = await ad.createAd({
            image: ctx.request.body.image,
            intro: ctx.request.body.intro,
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
    'DELETE /api/ad/:id': async (ctx, next) => {
        console.log('删除某广告...');
        const result = await ad.deleteAd(ctx.params.id);
       
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
    'PUT /api/ad/:id': async (ctx, next) => {
        console.log('修改某广告...');
        const result = await ad.updateAd({
            image: ctx.request.body.image,
            intro: ctx.request.body.intro,
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
    'GET /api/ad/:id': async (ctx, next) => {
        console.log('查询某广告...');
        const result = await ad.getAd(ctx.params.id);

        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    },
    //查列表
    'GET /api/ads': async (ctx, next) => {
        console.log('广告列表...');
        const result = await ad.getAds();
  
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    }

};