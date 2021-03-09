### Node 类型

#### 元素节点
• nodeType：1
• nodeName：大写标签名
• nodeValue：null

#### 文本节点
• nodeType： 3
• nodeName：'#text'
• nodeValue：文本内容

#### 注释节点
• nodeType：8
• nodeName：'#common'
• nodeValue：注释内容

#### 文档节点
• nodeType： 9
• nodeName：'#document'
• nodeValue：null

#### 父节点

parentNode 获取当前节点唯一的父亲节点

#### 子节点

childNodes 获取当前元素的所有子节点

子节点：只获取儿子级别的

> NodeList 是一个类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点。NodeList 对象的独特之处在于，它实际上是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反映在 NodeList 对象中。

可以通过方括号，也可以使用 item() 方法，来访问 NodeList 中的节点；通过 length 属性可以访问其长度。

```
var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNodes.item(1);
var count = someNode.childNodes.length;
```

####  兄弟节点
previousSibling

获取当前节点的上一个兄弟节点

previousElementSibling

获取上一个兄弟（哥哥）元素的节点（不兼容 IE6~8）

nextSibling

获取当前节点的下一个兄弟节点（弟弟）

nextElementSibling

获取下一个兄弟（弟弟）元素的节点（不兼容 IE6~8）

#### 首尾节点

firstChild

获取当前元素的第一个子节点

firstElementchild

获取当前元素的第一个元素子节点（不兼容 IE6~8）

lastChild

获取当前元素的最后一个子节点

lastElementChild

获取当前元素的最后一个元素子节点

ownerDocument

所有节点都有这个属性，指向表示整个文档的文档节点

### Document 节点

#### 文档的子节点

（1）documentElement

该属性始终指向 HTML 页面中的 html 元素

```
var html = document.documentElement;
```

（2）通过子节点访问文档元素

```
//=> 不兼容
var html = document.firstChild;
var html = document.childNodes[0];

var body = document.body;
```

Document 类型的另一个可能的子节点是 DocumentType

```
var doctype = document.doctype;
```

#### 文档信息

作为 HTMLDocument 的实例，document 对象还有一些标准的 Document 类型没有的属性，提供了 document 对象所表现的网页的一些信息

```
var orginalTitle = document.title;
document.title = 'new page title'；

// 页面中完整的url地址
var url = document.URL;

// 属性值包含页面的域名
var domain = document.domain;

// 链接到当前页面的那个页面的 URL
var referrer = document.referrer;

// 这三个关于网页请求的只有 domain 是可以设置的

// URL 中包含一个子域名，如：p2p.wrox.com，那么只能将 domain 设置为 wrox.com。不能将这个属性设置为 URL 中不包含的域。 

//=> 假设页面来自于 p2p.wrox.com
document.domain = 'wrox.com'; //=> 成功
document.domain = 'nczonline.net'; //=> 出错
```

由于跨域安全的限制，来自不同子域的页面无法通过 JavaScript 通信。而通过将每个页面的 document.domain 设置为相同的值，这些页面就可以互相访问对方包含的 JavaScript 对象了

#### 查找元素

getElementById、getElementsByTagName、getElementsByName、getElementsByClassName

- getElementById 必须与页面元素的 id 特性严格匹配，包括大小写。如果页面中有多个元素的 ID 相同，只返回文档中第一次出现的元素。

- 对于 getElementsByTagName、getElementsByName、getElementsByClassName  这三个方法，都会返回一个 HTMLCollection 对象

> HTMLCollection 是类数组

#### 文档写入

document 对象有将输出流写入到网页中的能力。这个能力体现在四个方法中：write()、writeln()、open()、close()。一般不需要使用。

#### getAttribute setAttribute removeAttribute

有两类特殊的特性，虽然有对应的属性名，但是属性值与通过 getAttribute 返回的值并不相同。

第一类就是 style，用于通过 CSS 为元素指定样式。在通过 getAttribute 访问时，返回的是 CSS 文本，而通过属性来访问时，返回的是一个对象。因为 DOM 的 style 属性是用于以编程方式访问元素的样式的。

第二类是 onclick 这类的事件处理程序。当在元素上使用时， onclick 属性值是 JavaScript 代码，如果通过 getAttribute 返回的是代码字符串，而通过属性访问时，则返回一个函数。这是因为 onclick 及其它事件处理程序属性本身就应该被赋予函数值。


setAttribute 设置

```
div.myColor = 'red';
console.log(div.getAttribute('myColor')); //null
```