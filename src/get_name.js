const fs = require('fs');
const path = require('path');

 
// // 同步读取目录
function get_pdf_name(dir2) {
  let filesAndDirectories = [];
  function get_name(dir){
    file_path = []
    fs.statSync(dir); // 通过fs.statSync强制刷新缓存
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      entries.forEach((entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          // 所有子目录文件全部列举
          // filesAndDirectories = filesAndDirectories.push(get_pdf_name(fullPath));
          get_name(fullPath)
        } else {
          file_path.push(fullPath);
        }
      });
    } catch (error) {
      console.error(error);
    }
    return file_path
  }
  filesAndDirectories.push(get_name(dir2))
  console.log(filesAndDirectories)
  return filesAndDirectories;
}

module.exports = get_pdf_name;
