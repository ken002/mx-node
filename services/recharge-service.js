const model = require('../model');

let Recharge = model.Recharge;

module.exports = {
    createRecharge:async(params)=>{
        const result= await Recharge.create(params);
        return result;
    },
    deleteRecharge: async(id)=>{
        const result = await Recharge.destroy({
         where: {
             id
           }
        });
         return result;
     },
    updateRecharge:async(params,id)=>{
        const result= await Recharge.update(params,{
            where:{
                id
            }
        });
        return result;
    },
    getRecharge:async(id)=>{
        const result= await Recharge.findAll({
            where:{
                id
            }
        });
        return result;
    },
    getRecharges: async(params) => {
        const result = Recharge.findAll();
        return result;
    }
}