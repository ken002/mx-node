const category = require('../services/category-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/category': async (ctx, next) => {
        console.log('新增分类...');
        const c = await category.createCategory({
            name: ctx.request.body.name
        });
        ctx.rest({
            code:1,
            message:'添加成功',
            data:c,
        });
    },
    //删
    'DELETE /api/category/:id': async (ctx, next) => {
        console.log('删除某个类别...');
        const result = await category.deleteCategory(ctx.params.id);
        console.log(result);
        if(result){
            ctx.rest({
                code:1,
                message:'删除成功',
                data:null,
            });
        }else{
            // throw new APIError('product:not_found', 'product not found by id.');
            ctx.rest({
                code:0,
                message:'删除失败',
                data:null,
            });
        }
    },
    //查列表
    'GET /api/category': async (ctx, next) => {
        console.log('查询所有分类...');
        const categoryList = await category.getCategoryList();
        ctx.rest({
            code:1,
            message:'查询成功',
            data:categoryList,
        });
    },
};