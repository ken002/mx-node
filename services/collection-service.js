const model = require('../model');

let Collection = model.Collection;

module.exports = {
    createCollection:async(params)=>{
        const result= await Collection.create(params);
        return result;
    },
    deleteCollection: async(id)=>{
        const result = await Collection.destroy({
         where: {
             id
           }
        });
         return result;
     },
     getIsCollected:async(userId,productId)=>{
        const result= await Collection.findAll({
            where:{
                userId,
                productId
            }
        });
        return result;
    },
    getCollections: async(params) => {
        const result = await Collection.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
            where:{
                userId:params.userId
            }
        });
        return result;
    }
}