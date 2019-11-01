const model = require('../model');

let Product = model.Product;

module.exports = {
    createProduct:async(params)=>{
        const p= await Product.create(params);
        return p;
    },
    getProducts: async(params) => {
        const products = Product.findAll({
            limit: parseInt(params.limit),
            offset: parseInt(params.offset),
        });
        return products;
    },
}