const model = require('../model');

let Category = model.Category;

module.exports = {
    createCategory:async(params)=>{
        const c = await Category.create(params);
        return c;
    },
    deleteCategory: async(id)=>{
       const result = await Category.destroy({
        where: {
            id
          }
       });
        return result;
    },
    getCategoryList: async() => {
        const categoryList = await Category.findAll();
        return categoryList;
    }
}