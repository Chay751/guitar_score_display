
function setupDragAndDrop() {
  var dropZone = document.getElementById('drop-zone');
 
  dropZone.addEventListener('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  });
 
  dropZone.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
 
    var files = e.dataTransfer.files;
    var pdfFile = null;
    
    // 查找文件中的PDF
    for (var i = 0; i < files.length; i++) {
      if (files[i].type === 'application/pdf') {
        pdfFile = files[i];
        break;
      }
    }
 
    if (pdfFile) {
      // 处理PDF文件
      // 例如: 可以使用FileReader读取文件内容
      var reader = new FileReader();
 
      reader.onload = function(e) {
        // e.target.result 包含PDF文件的数据
        // 在这里你可以使用这些数据
        console.log(e.target.result);
        pdfUrl = e.target.result
        show_pdf(pdfUrl)
      };
 
      reader.readAsArrayBuffer(pdfFile);
    } else {
      alert('未找到PDF文件');
    }
  });
}

function show_pdf(pdfUrl){
  // 获取PDF文件路径
  // const pdfUrl =  './奉献.pdf';
  // 加载PDF文件
  pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
    // 获取页面总数
    const pagesCount = pdf.numPages;
    for (let i =0; i<pagesCount; i++){
          // 创建一个新的div元素
      var pdfbox = document.getElementById("pdfbox");
      var newDiv = document.createElement("canvas");
      newDiv.setAttribute("id", "pdf-canvas" + (i+1)) 
      newDiv.style.width = "680px";
      newDiv.style.marginRight = "10px";
      newDiv.style.display = "flex"
      // newDiv.style.height = "800px";
      // 将新元素添加到body中
      pdfbox.appendChild(newDiv)
      // document.body.appendChild(pdfbox);
    }

    console.log(pagesCount)
    // 循环处理每一页
    for (let i = 1; i <= pagesCount; i++) {
      // 获取页面对象
      pdf.getPage(i).then(page => {
        // 获取canvas元素
        const canvas = document.getElementById('pdf-canvas'+i);
        // 获取渲染上下文
        const context = canvas.getContext('2d');
        // 获取页面原始大小
        const viewport = page.getViewport({ scale: 1 });
        // 设置canvas大小
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        // canvas.height = 800+'px';
        // canvas.width = 800+'px';
        // 渲染页面到canvas
        page.render({
          canvasContext: context,
          viewport: viewport
        })
      });
    }
  });
}


 
