const model = require('../model');

let Ad = model.Ad;

module.exports = {
    createAd:async(params)=>{
        const result= await Ad.create(params);
        return result;
    },
    deleteAd: async(id)=>{
        const result = await Ad.destroy({
         where: {
             id
           }
        });
         return result;
     },
    updateAd:async(params,id)=>{
        const result= await Ad.update(params,{
            where:{
                id
            }
        });
        return result;
    },
    getAd:async(id)=>{
        const result= await Ad.findAll({
            where:{
                id
            }
        });
        return result;
    },
    getAds: async(params) => {
        const result = await Ad.findAll();
        return result;
    }
}