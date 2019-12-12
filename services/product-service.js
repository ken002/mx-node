const model = require('../model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let Product = model.Product;

module.exports = {
    createProduct:async(params)=>{
        const result= await Product.create(params);
        return result;
    },
    deleteProduct: async(id)=>{
        const result = await Product.destroy({
         where: {
             id
           }
        });
         return result;
     },
    updateProduct:async(params,id)=>{
        const result= await Product.update(params,{
            where:{
                id
            }
        });
        return result;
    },
    getProduct:async(id)=>{
        const result= await Product.findAll({
            where:{
                id
            }
        });
        return result;
    },
    getProducts: async(params) => {
        const result = await Product.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset)
        });
        return result;
    },
    getProductsByName: async(params) => {
        const result = await Product.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
            where:{
                name:{
                    [Op.substring]:params.name
                }
            }
        });
        return result;
    },
    getProductsByType: async(params) =>{
        const result = await Product.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
            where:{
                pType:params.pType
            }
        });
        return result;
    },
    getProductsOnline: async(params) =>{
        const result = await Product.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
            where:{
                online:params.online
            }
        });
        return result;
    },
    getProductsByCategory: async(category)=>{
        const result= await Product.findAll({
            where:{
                category
            }
        });
        return result;
    }
}