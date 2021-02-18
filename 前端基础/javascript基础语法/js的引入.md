### javascript 的引入 

一般把js 引入 body的末尾：

一般情况下浏览器加载页面时，遇到script标签，回立即加载执行，会阻塞页面中其他元素的加载。

- 1 放在body后，是因为执行时，可能需要获取页面中的元素，放在body后边，可以确保元素已经加载完毕，并且不会阻塞页面的加载
- 2 放在head中，需要使用 window.onload 
- 3 asyns属性 回事script标签进行异步加载，不会阻塞页面其他元素的加载，加载完毕之后立即执行，defer属性 script标签进延迟执行，在所有元素加载完毕之后执行

### 页面渲染时 javascript 的阻塞

包含外部样式表文件和外部脚本文件的html 和渲染过程：
- 1 浏览器下载html文件并开始解析dom
- 2 遇到样式表文件link[rel=stylesheet],将其加入资源文件下载队列，继续解析dom
- 3 遇到脚本文件时，暂停dom解析并立即下载脚本文件,现代浏览器会并行加载js文件，按照书写顺序执行
- 4 下载结束后立即执行脚本，再脚本中可访问当前`<script>`以上的DOM
- 5 脚本执行结束，继续解析DOM
- 6 整个DOM解析完成，触发DOMContentLoaded事件

#### 什么是阻塞？
在页面中我们通常回引用外部文件，解析html页面从上到下解析渲染，如果head中有一个a.js 而这个文件很大，或者有问题，需要2秒加载，那么浏览器回停止渲染界面（此时是白屏显示，页面啥都没有）2s加载完成才会继续渲染

#### 为什么阻塞

由于script 可能改变dom结构，所以解析器停止生成了dom树，解析器被js阻塞，等待js文件发起http请求，然后加载，js执行完成后解析器继续解析。

#### 解决阻塞方法

- 1 推迟加载（延迟加载）
把引用外部外部文件的代码写在最后
- 2 defer 延迟加载 html4
    - defer属性表示延迟脚本的执行，等到整个文档解析完在执行
    - defer属性能延迟执行，但是不会延迟下载，浏览器遇到script就立即下载
    - 文档解析完成，脚本被执行，此时也会出发domcontentloaded事件，优先执行脚本
    - 多个标签加defer属性，执行顺序仍然是按书写顺序
```
<script src="" defer></script>
```
- 3 异步加载 html5
    - async 属性，是异步加载脚本，浏览器还能正常解析dom
    - 一定会在load事件之前执行，可能在domcontentLoaded事件之前或者之后执行
    - 异步脚步的执行顺序不定，可能不会按照书写顺序执行
```
<script src="" async></script>
```
- 4 动态加载 

```
function loadScript(url, callback){
    var script = document.createElement ("script")
    script.type = "text/javascript";
    if (script.readyState){ //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
```
- 5 XMLHttpRequesr(XHR)对象

```
var xhr = new XMLHttpRequest();
xhr.open("get","script1.js",true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status>=200 && xhr.status<300 || xhr.status == 304){
            var script = document.createElement("script");
            script.type = "text/script";
            script.text = xhr.responseText;
            document.body.appendChild(script);
        }
    }
}
```

> 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完全加载。

> $(document).ready() 与 window.onload 区别，前者等待dom就绪后执行，后者等待所有html关联资源，加载完成之后执行。

> css文件是并行下载的,css的下载会阻塞后面js的执行,css的下载不会阻塞后面js的下载，但是js下载完成后，被阻塞执行,js会阻止dom的解析，但是css不会阻止dom的解析。

总结：
- 1 js文件会立即下载与执行，执行完毕之后，在开始解析dom
- 2 css文件下载，不会阻止dom解析，不会阻止js下载，会阻止页面渲染，如果js文件，在css文件之后，会阻止js执行
- 3 js文件，可能会操作之前的dom节点跟css样式，因此浏览器会维持，之前的css 和js顺序，