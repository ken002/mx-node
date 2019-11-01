const fs = require('fs');
const APIError = require('../rest').APIError;

module.exports = {
    'POST /api/upload': async (ctx, next) => {
        //如果在app.js里面配置了uploadDir就会上传多上传一遍
        const file = ctx.request.files.file;
        const reader = fs.createReadStream(file.path);
        const ext = file.name.split('.').pop();
        const fileName = `public/upload/${Math.random().toString()}.${ext}`;
        const upStream = fs.createWriteStream(fileName);
        reader.pipe(upStream);

        ctx.rest({
            code:1,
            message:'上传成功',
            data:{
                url:`http://localhost:8000/${fileName}`
            },
        });
    }
}