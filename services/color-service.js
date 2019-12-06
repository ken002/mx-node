const model = require('../model');

let Color = model.Color;

module.exports = {
    createColor:async(params)=>{
        const color= await Color.create(params);
        return Color;
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
        const colors = Color.findAll();
        return colors;
    }
}