### 简述

函数实际上就是对象，每一个函数都是 Function 类型的实例，与其他引用一样具有属性和方法。由于函数是对象，因此，函数名实际上就是一个指向函数对象的指针，不会与某个函数绑定

### 创建

```
// 函数声明式语法
function sum(num1,num2){
    return num1+num2
}

// 函数表达式
var sum = function(){
    return num1 + num2
}
```

> 函数声明 会提升变量（函数名）并赋值，函数表达式 提升变量 并未赋值

```
vat sum = new Function("num1", "num2", "return num1 + num2");
```


接受任意数量参数，前面的参数枚举传入函数的参数，最后一个始终被看做是函数体。

由于这种语法会导致两次解析代码，第一次是解析常规的 ECMAScript 代码，第二次是解析传入构造函数的字符串，从而影响性能。

> eval 与 new Function 区别
1.eval会影响到作用域（访问和修改它外部作用域的变化），而 Function 更多地类似于一个沙盒。无论在哪里执行 Function，它都仅仅能全局作用域，因此对局部变量影响较小
2.使用eval经常会自动生成为全局变量，因封装即时函数

### 没有重载

函数重载是指在同一作用域内，可以有一组具有相同函数名，不同参数列表的函数，这组函数被称为重载函数。重载函数通常用来命名一组功能相似的函数，这样做减少了函数名的数量，避免了名字空间的污染，对于程序的可读性有很大的好处。

因为函数名是函数对象的指针，也就相当于变量，再次赋值，会覆盖前面的值，指向另一个函数对象地址。所以没有重载。

### 作为值的函数

ECMAScript 中的函数名本身就是变量，所以函数也可以作为值来使用。也就是，不仅可以将函数当做参数传递给另一个函数，而且可以作为另一个函数的结果返回

### 函数内部属性
在函数内部，有两个特殊对象：arguments 和 this。
arguments 是一个类数组对象，包含传入函数的所有参数，这个对象还有一个 callee 属性，该属性是一个指针，指向拥有这个 arguments 对象的函数。

另一个特殊对象 this 引用的是函数据以执行的环境对象。

> 注意：在严格模式下，访问 arguments.callee、caller 等，都会导致错误。都是为了增强这门语言的安全性，这样第三方代码就不能在相同的环境窥视其他代码。

### 函数的属性和方法

length 属性表示希望接受的命名参数个数

length 属性表示希望接受的命名参数个数

prototype 属性保存着引用类型的所有实例和方法的真正所在。


每个函数都包含两个非继承而来的方法：apply() 和 call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内的 this 对象值。

```
function sum(num1, num2) {
  return num1 + num2;
}

function callSum1(num1, num2) {
  return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
  return sum.apply(this, [num1, num2]);
}

alert(callSum1(10, 10)); //20
alert(callSum2(10, 10)); //20
```

call() 方法与 apply() 方法的作用相同，区别仅是接收参数的方式不同。
第一个参数是 this 值，其余参数都是直接传递给函数。也就是说，使用 call() 方法，传递给函数的参数必须逐个列举

```
function sum(num1, num2) {
  return num1 + num2;
}

function callSum(num1, num2) {
  return sum.call(this, num1, num2);
}

alert(callSum(10, 10)); //20
```

这两个方法真正强大的地方是能够扩充函数赖以运行的作用域，最大好处就是对象不需要与方法有任何的耦合。

```
window.color = "red";
var o = { color: "blue" };

function sayColor() {
  alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor(); // blue
```
toLocaleString()、toString()、valueOf() 方法会返回函数的源代码，但是源代码的格式因浏览器而异，所以无法根据返回结果来实现任何功能，只能用于调试。
