// call 用于改变 this指向，并执行函数
// 实现思路 谁调用函数，函数this指向，将函数作为对象的属性，由对象进行调用，即可改变this的指向，这种被称为隐式的转换

Function.prototype.mycall = function(){
    let obj = arguments[0];
    if(typeof obj != "function" ){
        throw "err"
    }
    obj._fun = this;
    let args = [...arguments].slice(1);
    let res = obj._fun(...args);
    delete obj._fun;
    return res;
}
// 1 判断调用对象是否为 function
// 2 将当前调用的函数，转换为传入对象的属性
// 3 截取参数，去除第一个参数，调用对象方法，实现this转换
// 4 删除方法 返回调用结果


