const express = require('express')
const my_router = express.Router()

my_router.post('/data', (req, res) => {
    file_path = getname(currentFileDir+'/public/pdf')
    const jsonString = JSON.stringify(file_path);
    const jsonObject = JSON.parse(jsonString);
    // 发送响应
    res.json(jsonObject);
  });

  
my_router.use((err, req ,res, next) => {
    console.error(err);
    res.status(500).json({
        code:1002,
        msg:'服务器发生错误'
    })
})


module.exports = my_router;