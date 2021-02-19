### Global 

#### 1 Global 对象不存在

事实上没有全局变量或全局函数，所有在全局作用域中定义的属性和函数，都是 Global 对象的属性和方法。

如： isNaN()、isFinite()、parseInt()、parseFloat()

#### 2 URI 编码方法

encodeURI() 和 encodeURIComponent() 方法可以对 URI 进行编码，以便发送给浏览器。
有效的 URI 中不能包含某些特殊字符，如空格。这两个方法就能对 URI 进行编码，用特殊的 UTF-8 编码替换所有无效的字符，从而让浏览器能够接受和理解。
- encodeURI() 不会对本身属于 URI 的特殊字符进行编码，如冒号、正斜杠等
- encodeURIComponent() 则会对它发现的任何非标准字符进行编码
- 所以，第一个主要用于整个 URI，而第二个主要用于某一段 URI
解码方法：decodeURI() 和 decodeURIComponent()
- decodeURI() 只能对 encodeURI() 替换的字符串进行解码
- decodeURIComponent() 对两个都可以解码

#### 3 eval() 

eval 方法就像是一个完整的 ECMAScript 解析器，只接受一个参数，即要执行的 ECMAScript 字符串

当解析器发现代码中调用的 eval 方法时，他会将传入的参数当做实际的语句来解析，然后把执行的结果插入到原位置。通过 eval 执行的代码被认为是包含该次调用的执行环境的一部分，因此被执行代码具有与该执行环境相同的作用域链。

在 eval 中创建的任何变量或函数都不会被提升，只会在 eval 执行的时候创建。严格模式下，在外部访问不到 eval 中创建的变量和函数。

#### 4. 属性
特殊的值 undefined、NaN、Infinity 都是 Global 对象的属性
所有原生引用类型的构造函数，都是 Global 对象的属性

#### 5. window 对象