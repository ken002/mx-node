const model = require('../model');

let Notice = model.Notice;

module.exports = {
    createNotice:async(params)=>{
        const result= await Notice.create(params);
        return result;
    },
    deleteNotice: async(id)=>{
        const result = await Notice.destroy({
         where: {
             id
           }
        });
         return result;
     },
    updateNotice:async(params,id)=>{
        const result= await Notice.update(params,{
            where:{
                id
            }
        });
        return result;
    },
    getNotice:async(id)=>{
        const result= await Notice.findAll({
            where:{
                id
            }
        });
        return result;
    },
    getNotices: async(params) => {
        const result = await Notice.findAll();
        return result;
    }
}