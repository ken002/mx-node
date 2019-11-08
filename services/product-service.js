const model = require('../model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

let Product = model.Product;

module.exports = {
    createProduct:async(params)=>{
        const p= await Product.create(params);
        return p;
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
        const products= await Product.findAll({
            where:{
                id
            }
        });
        return products;
    },
    getProducts: async(params) => {
        const products = Product.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset)
        });
        return products;
    },
    getProductsByName: async(params) => {
        const products = Product.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
            where:{
                name:{
                    [Op.substring]:params.name
                }
            }
        });
        return products;
    },
    getProductsHot: async(params) =>{
        const products = Product.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
            where:{
                hot:params.hot
            }
        });
        return products;
    },
    getProductsOnline: async(params) =>{
        const products = Product.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
            where:{
                online:params.online
            }
        });
        return products;
    },
}