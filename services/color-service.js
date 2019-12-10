const model = require('../model');

let Color = model.Color;

module.exports = {
    createColor:async(params)=>{
        const result= await Color.create(params);
        return result;
    },
    deleteColor: async(id)=>{
        const result = await Color.destroy({
         where: {
             id
           }
        });
         return result;
     },
    getColors: async(params) => {
        const result = Color.findAll();
        return result;
    }
}