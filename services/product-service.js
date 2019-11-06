const model = require('../model');

let Product = model.Product;

module.exports = {
    createProduct:async(params)=>{
        const p= await Product.create(params);
        return p;
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
            offset: parseInt(params.offset),
        });
        return products;
    },
}