// bind 用于改变 this指向，并返回一个新函数

// 注意点

// - 维护原函数原型链
// - 作为构造函数调用
// - 保留了this指向,保留了参数
// - 返回的函数 作为构造函数使用，this指向 新生成的对象，无视第一个参数

// new 绑定等级高于显式绑定

// 实现思路
//  bind 不会立即执行返回一个待执行函数 闭包
//  实现作用域的绑定
//  参数传递
//  作为构造参数调用时，进行原型继承

Function.prototype.mybind = function(){
    var obj = arguments[0] || window;
    if(typeof obj != 'function'){
        throw 'err'
    }
    let args = [...args].slice(1);
    let self = this;
    let binFun = function (){
        self.apply(this instanceof binFun ? this: obj,[...args,...arguments]);
    } 
    let Fun = function(){};
    Fun.prototype = this.prototype;
    binFun.prototype = new Fun();
    return binFun;
}

