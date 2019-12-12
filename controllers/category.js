const category = require('../services/category-service');
const APIError = require('../rest').APIError;

module.exports = {
    //增
    'POST /api/category': async (ctx, next) => {
        console.log('新增分类...');
        const result = await category.createCategory({
            name: ctx.request.body.name
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
    'DELETE /api/category/:id': async (ctx, next) => {
        console.log('删除某个类别...');
        const result = await category.deleteCategory(ctx.params.id);
      
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
    'GET /api/category': async (ctx, next) => {
        console.log('查询所有分类...');
        const result = await category.getCategoryList();
     
        ctx.rest({
            code: 1,
            message: '查询成功',
            data: result,
        });
    },
};