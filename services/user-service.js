const model = require('../model');

let User = model.User;

module.exports = {
    createUser:async(params)=>{
        const result= await User.create(params);
        return result;
    },
    updateUser:async(params)=>{
        const result= await User.update(params,{
            where:{
                openId:params.openId
            }
        });
        return result;
    },
    getUser:async(openId)=>{
        const result= await User.findAll({
            where:{
                openId
            }
        });
        return result;
    },
    getUsers: async(params) => {
        const result = await User.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
        });
        return result;
    }
}