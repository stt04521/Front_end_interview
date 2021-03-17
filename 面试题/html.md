### 简述一下src与href的区别?

（1）href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。在 link、a 等元素上使用。

（2）src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

### 添加 移除 移动 复制 创建 和查找 元素？

1 创建元素 
document.createDocumentFragment  //创建一个DOM片段；
createElement() //创建一个元素；
createTextNode() //创建一个文本节点；

2 
appendChild() // 添加
insertBefore() // 插入
removeChild() // 移除 
replaceChild() // 替换
cloneNode() // 复制

3 查找 节点

getElementById() //通过元素id，唯一性；
getElementsByTagName() //通过标签名称；
getElementsByName() //通过元素的name属性的值