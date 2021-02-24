// new 使用构造函数创建新对象，为实例对象，添加this的属性和 方法

// new 的过程
// 1 创建一个新对象
// 2 新对象的 _proto_ 指向 构造函数的原型
// 3 新对象添加属性和方法(this指向)
// 4 返回this 所指的新对象

function new_ (){
    let fn = Array.prototype.shift.call(arguments);
    if(typeof fn != 'function'){
        throw fn + 'is not a constructor'
    }
    let obj = Object.create(fu.prototype);
    let res = fn.apply(obj,arguments);
    return typeof ref === 'object' ? res : obj;
}

// Obect.create

Object.prototype.create = function (obj){
    let Fn = function(){};
    Fn.prototype = obj;
    Fn.prototype.constructor = Fn;
    return new Fn;
}