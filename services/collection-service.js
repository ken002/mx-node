const model = require('../model');
const db = require('../db');

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
        const result = await db.sequelize.query(`SELECT 
            a.id as collectionId,
            b.name, b.image, b.video, b.intro,showType, b.id
            FROM collection a RIGHT JOIN product b ON a.productId = b.id 
            WHERE a.userId='${params.userId}' LIMIT ${params.offset}, ${params.limit};`);

        return result; 
    }
}