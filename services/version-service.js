const model = require('../model');
const db = require('../db');

let Version = model.Version;

module.exports = {
    createVersion:async(params)=>{
        const result= await Version.create(params);
        return result;
    },
    deleteVersion: async(id)=>{
        const result = await Version.destroy({
         where: {
             id
           }
        });
         return result;
     },
    getVersions: async(params) => {
        const result = await Version.findAll();
        return result;
    },
    getNewVersions: async(platform) => {
        const result = await db.sequelize.query(`SELECT * FROM version WHERE platform=${platform} AND appVersion=(
            SELECT max(appVersion) FROM version WHERE platform=${platform});`);
        return result;        
    },
}