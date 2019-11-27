const model = require('../model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let Ad = model.Ad;

module.exports = {
    createAd:async(params)=>{
        const ad= await Product.create(params);
        return ad;
    },
    deleteAd: async(id)=>{
        const result = await Product.destroy({
         where: {
             id
           }
        });
         return result;
     },
    updateAd:async(params,id)=>{
        const result= await Product.update(params,{
            where:{
                id
            }
        });
        return result;
    },
    getAds: async(params) => {
        const products = Product.findAll();
        return products;
    }
}