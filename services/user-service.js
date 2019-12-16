const model = require('../model');
const db = require('../db');

let User = model.User;

module.exports = {
    createUser:async(params)=>{
        const result= await User.create(params);
        return result;
    },
    updateUser:async(params)=>{
        const queryResult = await db.sequelize.query(`SELECT * FROM user WHERE account='${params.account}' AND question='${params.question}'`);
        if(queryResult[0].length===0){
            return null;
        }else{
            const result = await db.sequelize.query(`UPDATE user SET password='${params.password}' WHERE account='${params.account}' AND question='${params.question}'`);
            return result;  
        }
    },
    getUserByAccountAndPass:async(params)=>{
        const result = await db.sequelize.query(`SELECT * FROM user WHERE account='${params.account}' AND password='${params.password}'`);
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