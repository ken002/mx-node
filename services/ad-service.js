const model = require('../model');

let Ad = model.Ad;

module.exports = {
    createAd:async(params)=>{
        const ad= await Ad.create(params);
        return ad;
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
        const ads = Ad.findAll();
        return ads;
    }
}