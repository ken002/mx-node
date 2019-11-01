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

    },
    //改
    'PUT /api/category/:id': async (ctx, next) => {

    },
    //查某个
    'GET /api/category/:id': async (ctx, next) => {

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