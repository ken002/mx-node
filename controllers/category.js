const category = require('../services/category-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/category': async (ctx, next) => {
        console.log('新增分类...');
        const result = await category.createCategory({
            name: ctx.request.body.name
        });
  
        ctx.rest({
            code:1,
            data:result,
            message:'新增成功'
        });
    },
    //删
    'DELETE /api/category/:id': async (ctx, next) => {
        console.log('删除某个类别...');
        const result = await category.deleteCategory(ctx.params.id);
      
        if (result) {
            ctx.rest({
                code:1,
                data:result,
                message:'删除成功'
            });
        } else {
            throw new APIError(0, '要删除的类别不存在');
        }
    },
    //查列表
    'GET /api/category': async (ctx, next) => {
        console.log('查询所有分类...');
        const result = await category.getCategoryList();
     
        ctx.rest({
            code:1,
            data:result,
            message:'查询成功'
        });
    },
};