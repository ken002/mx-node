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
     
        ctx.rest({
            code:1,
            data:result,
            message:'新增成功'
        });
    },
    //删
    'DELETE /api/ad/:id': async (ctx, next) => {
        console.log('删除某广告...');
        const result = await ad.deleteAd(ctx.params.id);
       
        if (result) {
            ctx.rest({
                code:1,
                data:result,
                message:'删除成功'
            });
        } else {
            throw new APIError(0, '要删除的广告不存在');
        }
    },
    //改
    'PUT /api/ad/:id': async (ctx, next) => {
        console.log('修改某广告...');
        const result = await ad.updateAd({
            image: ctx.request.body.image,
            intro: ctx.request.body.intro,
        }, ctx.params.id);
        
        ctx.rest({
            code:1,
            data:result,
            message:'修改成功'
        });

    },
    //查某个
    'GET /api/ad/:id': async (ctx, next) => {
        console.log('查询某广告...');
        const result = await ad.getAd(ctx.params.id);

        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    },
    //查列表
    'GET /api/ads': async (ctx, next) => {
        console.log('广告列表...');
        const result = await ad.getAds();
  
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    }

};