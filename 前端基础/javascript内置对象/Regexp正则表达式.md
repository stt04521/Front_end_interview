### 1 创建 

字面量形式

```
var expression = / pattern / flags;
```

new 操作符加 RegExp 构造函数创建

var pattern = new RegExp("pattern", "flags");

- pattern 部分可以是任何简单或复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用
- flags 标志，每个正则表达式都可带有一或多个标志，以表明正则表达式的行为
    - g 表示全局模式，即模式将被应用于所有字符串、而非在发现第一个匹配项时立即停止
    - i 表示不区分大小写模式，即在确定匹配项时忽略模式与字符串的大小写
    - m 表示多行模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。

### 元字符

    元字符在正则表达式中都有一种或多种特殊用途，如果想要匹配的字符串包含这些字符，都必须转义。
    
元字符

```
{ ( [ \ ^ $ | ? * + . ] ) }
```
字面量形式

```
// 匹配第一个 "bat" 或 "cat"，不区分大小写
var pattern1 = /[bc]at/i;

// 匹配第一个 "[bc]at"，不区分大小写
var pattern2 = /\[bc\]at/i;
```

new 操作符形式，需要双重转义，不只是元字符，那些已经转义过的字符也是如此
```
var pattern = new RegExp("\\[bc\\]at", "i");
```

### 3. RegExp 实例属性

#### 3.1 global

布尔值，判断是否设置了 g 标志

#### 3.2 ignoreCase

布尔值，判断是否设置了 i 标志

#### 3.3 lastIndex

整数，表示开始搜索下一个匹配项的字符位置，从 0 算起

#### 3.4 multiline

布尔值，表示是否设置了 m 标志

#### 3.5 source

正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回

### 4. RegExp 实例方法

#### 4.1 exec()

js基础语法 正则模块 有详细描述

#### 4.2 test()

js基础语法 正则模块 有详细描述


4.3 toLocaleString()、 toString() 和 valueOf()
toLocaleString() 和 toString()会返回正则表达式的字面量，与创建正则表达式的方式无关。
valueOf() 方法会返回正则表达式本身

### 构造函数属性

这些属性适用于作用域中的所有正则表达式，并且受执行的最近一次正则表达式操作而变化。因为其是全局的，会不断覆盖，所以一般不要使用。

| 长属性名	|短属性名	|说明|
|----|----|----|
|input	|$_	|最近一次要匹配的字符串|
|lastMatch	|$&	|最近一次的匹配项|
|lastParen	|$+	|最近一次匹配的捕获组|
|leftContext	|$`	|input 字符串中 lastMatch 之前的文本|
|multiline	|$*	|布尔值，表示是否所有表达式都使用多行模式|
|rightContext	|$'|Input 字符串中 lastMatch 之后的文本

除了上面的属性，还有多达 9 个用于存储捕获组的构造函数属性：RegExp.$1 RegExp.$2 ... RegExp.$9。在调用 exec()、test() 方法时，这些属性会被自动填充
```
var text = "this has been a short summer";
var pattern = /(.)hort/g;

if (pattern.test(text)) {
  console.log(RegExp.input); //this has been a short summer
  console.log(RegExp.leftContext); // this has been a
  console.log(RegExp.rightContext); // summer
  console.log(RegExp.lastMatch); // short
  console.log(RegExp.lastParen); // s
  console.log(RegExp.multiline); //false
}

if (pattern.test(text)) {
  console.log(RegExp.$_);
  console.log(RegExp["$`"]);
  console.log(RegExp["$''"]);
  console.log(RegExp["$&"]);
  console.log(RegExp["$+"]);
  console.log(RegExp["$*"]);
}
```

```
var text = "this has been a short summer";
var pattern = /(..)or(.)/g;

if (pattern.test(text)) {
  console.log(RegExp.$1); // sh
  console.log(RegExp.$2); // t
}
```