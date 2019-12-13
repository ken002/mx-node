const model = require('../model');
const db = require('../db');

let User = model.User;

module.exports = {
    createUser:async(params)=>{
        const result= await User.create(params);
        return result;
    },
    updateUser:async(params)=>{
        const result = await db.sequelize.query(`SELECT * FROM user WHERE account=${params.account} AND question=${params.question}`);
        return result;  
    },
    getUser:async(id)=>{
        const result= await User.findAll({
            where:{
                id
            }
        });
        return result;
    },
    getUserByAccountAndPass:async(params)=>{
        const result = await db.sequelize.query(`SELECT * FROM user WHERE account=${params.account} AND password=${params.password}`);
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