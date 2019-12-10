const model = require('../model');

let Category = model.Category;

module.exports = {
    createCategory:async(params)=>{
        const result = await Category.create(params);
        return result;
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
        const result = await Category.findAll();
        return result;
    }
}