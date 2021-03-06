### String 字符串对象

### 概述
String 对象是 JavaScript 原生提供的三个包装对象之一，用来生成字符串的包装对象。

valueOf 方法返回的就是它所包装的那个字符串。

实际上，字符串的包装对象是一个类似数组的对象

```
new String("abc")
// String {0: "a", 1: "b", 2: "c", length: 3}
```

> 由于字符串是基本类型，所以所有字符串的方法都不会改变原来的字符串，而是会创建一个副本返回

### 2. length

length 属性返回字符串的长度。字符串的这个属性是只读的，修改它不会起任何作用。

### 3. 字符与码值方法

#### fromCharCode

String 对象提供的静态方法

> 静态方法: 即定义在对象本身，而不是定义在对象实例的方法

> 该方法不支持 Unicode 码点大于 0xFFFF 的字符，即传入的参数不能大于 0xFFFF。码点大于0xFFFF的字符占用四个字节,JavaScript 只支持两个字节的字符

```
String.fromCharCode(104, 101, 108, 108, 111)
// "hello"
```

#### ES6 String.fromCodePoint()
fromCodePoint 可以识别大于 0xFFFF 的字符


#### charAt

- 作用: 根据索引获取指定位置的字符
- 参数：索引
- 返回：字符

```
'abc'.charAt(1) // "b"
'abc'[1] // "b"
```

区别: 当索引超出范围时，str[] 获取的结果是 undefined，运行机制是和对象一样，而 charAt 获取的是空字符串

> 如果参数为负数，或大于等于字符串的长度，charAt 返回空字符串。

#### charCodeAt()

作用：获取给定位置字符对应的  Unicode 码点（ASCII 码值）
参数：索引
返回：字符对应的码值

> charCodeAt 方法返回的 Unicode 码点不大于 65536（0xFFFF），也就是说，只返回两个字节的字符的码点

#### ES6 codePointAt()

JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为 2 个字节。对于那些需要 4 个字节储存的字符（Unicode 码点大于 0xFFFF 的字符），JavaScript 会认为它们是两个字符。


ES6 提供了 codePointAt 方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。

#### ES6 at()
该方法能识别码点大于 0xFFFF 的字符。

```
'abc'.charAt(0) // "a"
'𠮷'.charAt(0) // "\uD842"

'abc'.at(0) // "a"
'𠮷'.at(0) // "𠮷"
```

### 4 字符串的查找


#### indexOf、lastIndexOf 查找位置

作用：往后或往前查找一个字符串在调用此方法的字符串中第一次出现出现位置
参数：需要查找的字符串、开始查找的位置索引
返回：查找成功的字符串第一个位置的索引，不成功返回 -1

对于 indexOf 方法，第二个参数表示从该位置开始向后查找
对于 lastIndexOf，第二个参数表示从该位置起向前查找

```
'hello world'.indexOf('o', 6) //=> 7
'hello world'.lastIndexOf('o', 6) //=> 4
```

#### ES6 includes、startsWith、endsWith 判断

- includes()：返回布尔值，表示是否找到了参数字符串。
- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

这三个方法都支持第二个参数，表示开始搜索的位置。

#### search

search 方法的用法等同于 match，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回 -1。

> search 方法还可以使用正则表达式作为参数

### 5. 字符串转换数组

#### split

作用：和数组中的 join 相对应，按照给定规则分割字符串

参数：分割字符串或正则表达式、限定返回数组的最大成员数

返回：一个由分割出来的子字符串组成的数组

如果满足分割规则的两个部分紧邻着（即中间没有其他字符），则返回数组之中会有一个空字符串。
```
'a||c'.split('|') // ['a', '', 'c']

'|b|c'.split('|') // ["", "b", "c"]
'a|b|'.split('|') // ["a", "b", ""]
```

split 方法还可以接受第二个参数，限定返回数组的最大成员数


#### match

javascript基础语法 正则中有描述


### 6. 字符的操作

#### concat 拼接
concat 方法用于连接两个字符串，返回一个新字符串，不改变原字符串。

#### slice 抽取
作用：用于从原字符串取出子字符串并以新字符串的方式返回，不改变原字符串
参数：开始位置、结束位置（不包含结束位置，可省略）
返回：抽取的子字符串

如果省略第二个参数，则表示子字符串一直到原字符串结束。
```
    'javascript'.slice(4)// "Script"
```

支持负数索引
- 参数中有负数，则是从后面开始算起
- 负数运算规则：数组总长度 + 负数索引
- 如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为 0。


#### substring 抽取

substring 方法的作用和语法与 slice 一样，但是不支持负数索引

> 如果第二个参数大于第一个参数，substring 方法会自动更换两个参数的位置。

> 如果参数是负数，substring 方法会自动将负数转为 0。

#### substr 抽取

- 作用：与 substring 一样
- 参数：开始位置、抽取长度（默认为从开始到结尾）
- 返回：与 substring 一样
如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为 0，因此会返回空字符串。

#### trim 去除空格
```
'\r\nabc \t'.trim() // 'abc'
```

> 该方法去除的不仅是空格，还包括制表符（\t、\v）、换行符（\n）和回车符（\r）。

#### toLowerCase、toUpperCase大小写



#### localeCompare
它返回一个整数，如果小于 0，表示第一个字符串小于第二个字符串；如果等于 0，表示两者相等；如果大于 0，表示第一个字符串大于第二个字符串。

该方法的最大特点，就是会考虑自然语言的顺序。举例来说，正常情况下，大写的英文字母小于小写字母。

```
'a'.localeCompare('b') 
```

#### replace 替换

js 基础语法 正则模块 有描述


#### ES6 repeat 重复

repeat(n) 方法返回一个新字符串，表示将原字符串重复 n 次。

参数如果是小数，会被取整。

```
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

#### ES6 padStart、padEnd 补全

ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart() 用于头部补全，padEnd() 用于尾部补全


```
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```