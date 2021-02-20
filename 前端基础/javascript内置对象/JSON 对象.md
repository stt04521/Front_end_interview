基本语法
每个json对象 就是一个值
- 简单类型的值
- 对象
- 数组

- 简单类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用 NaN, Infinity, -Infinity 和 undefined）。
- 字符串必须使用双引号表示，不能使用单引号。
- 对象的键名必须放在双引号里面。
- 数组或对象最后一个成员的后面，不能加逗号。

### JSON.stringfy 


需要注意的是，对于原始类型的字符串，转换结果会带双引号。

```
JSON.stringify('foo') == "foo"
false
JSON.stringify('foo') == "\"foo\""
true
```

上面代码中，字符串 foo，被转成了 "foo"。这是因为将来还原的时候，双引号可以让 JavaScript 引擎知道，foo 是一个字符串，而不是一个变量名。

如果原始对象中，有一个成员的值是 undefined、函数或 XML 对象，这个成员会被过滤。

```
var obj = {
  a: undefined,
  b: function () {}
};

JSON.stringify(obj) //=> "{}"
```

如果数组的成员是 undefined、函数或 XML 对象，则这些值被转成 null。
```
var arr = [undefined, function () {}];
JSON.stringify(arr) //  "[null,null]"
```

正则对象会被转成空对象。

```
JSON.stringify(/foo/) // "{}"
```

JSON.stringify 方法会忽略对象的不可遍历属性。

#### 过滤器参数

JSON.stringify 方法接受的第二个参数是一个过滤器。

（1）可以是一个数组，指定需要转成字符串的属性。对数组无效

```
var obj = {
  'prop1': 'value1',
  'prop2': 'value2',
  'prop3': 'value3'
};

var selectedProperties = ['prop1', 'prop2'];

JSON.stringify(obj, selectedProperties)
// "{"prop1":"value1","prop2":"value2"}"
//=> 只转 prop1 和 prop2 两个属性。

```

（2）可以是一个函数，用来更改 JSON.stringify 的默认行为，同样只对对象有效。

```
function f(key, value) {
  if (typeof value === "number") {
    value = 2 * value;
  }
  return value;
}

JSON.stringify({ a: 1, b: 2 }, f)
// '{"a": 2,"b": 4}'
```

```
var o = {a: {b: 1}, c: 2};

function f(key, value) {
  console.log("["+ key +"]:" + value);
  return value;
}

JSON.stringify(o, f)
// []:[object Object]
// [a]:[object Object]
// [b]:1
// [c]:2
```
上面代码中，对象 o 一共会被 f 函数处理四次。第一次键名为空，键值是整个对象 o；第二次键名为 a，键值是 {b: 1}；第三次键名为 b，键值为 1，第四次键名为 c，键值为 2


递归处理中，每一次处理的对象，都是前一次返回的值。
```
var o = {a: 1};

function f(key, value) {
  if (typeof value === 'object') {
    return {b: 2};
  }
  return value * 2;
}

JSON.stringify(o,f)
// "{"b": 4}"
```


如果处理函数返回 undefined 或没有返回值，则该属性会被忽略。

```
function f(key, value) {
  if (typeof(value) === "string") {
    return undefined;
  }
  return value;
}

JSON.stringify({ a: "abc", b: 123 }, f)
// '{"b": 123}'
```

JSON.stringify 还可以接受第三个参数，用于控制结果汇总的缩进和空白符，增强返回的 JSON 字符串的可读性。

```
JSON.stringify({ p1: 1, p2: 2 }, null, 2);
/*
"{
  "p1": 1,
  "p2": 2
}"
*/

JSON.stringify({ p1:1, p2:2 }, null, '|-');
/*
"{
|-"p1": 1,
|-"p2": 2
}"
*/
```

> 需要注意的是：只要传入了有效控制缩进的参数值，结果字符串就会包含换行符，因为只缩进不换行没有意义，所以其内部实现了



#### toJSON 方法

```
var book = {
  title: 'aa',
  author: 'bb',
  toJSON: function() {
    return this.title;
  }
}
JSON.stringify(book); //=> ""aa""
//=> 需要注意的是：在内部这个 toJOSN 是通过这个 book 调用的，所以 this 还是指向 book
```

```
var obj = {
  reg: /foo/
};

// 不设置 toJSON 方法时
JSON.stringify(obj) // "{"reg":{}}"

// 设置 toJSON 方法时
RegExp.prototype.toJSON = RegExp.prototype.toString;
JSON.stringify(/foo/); //=> ""/foo/""
```
#### 序列化的顺序
（1）对象中管是否存在 toJSON 方法，如果存在，则调用该对象的 toJSON 方法，使用其返回值作为 JSON.stringify 的返回值，忽略其他参数

（2）没有 toJSON 方法，如果存在第二个参数，应用这个过滤器

（3）对过滤器返回的每个值进行相应的序列化

（4）如果提供了第三个参数，执行相应的格式化

### 还原函数

JSON.parse 方法可以接受一个还原函数，与 JSON.stringify 方法传入的过滤函数相对，用法类似。

```
function f(key, value) {
  if (key === ''){
    return value;
  }
  if (key === 'a') {
    return value + 10;
  }
}

var o = JSON.parse('{"a":1,"b":2}', f);
o.a // 11
o.b // undefined
```