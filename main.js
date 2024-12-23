const express = require('express');
const getname = require('./src/get_name')
const router = require('./src/router')
const app = express()
const cors = require('cors');
const { exec } = require('child_process');
const my_func = require('./src/my_func')

app.use(cors());


const path = require('path');
// 获取当前文件所在目录的绝对路径
const currentFileDir = path.dirname(__filename);
// 获取父文件夹的绝对路径
const parentDir = path.resolve(currentFileDir, '..');


// 中间件，用于处理请求
app.use(express.static(currentFileDir + '/public')); // 用于提供静态文件支持

// 解析JSON格式的请求体
app.use(express.json());
my_func()
app.use(router)




// 监听指定端口
const port = 2830;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});