// 基本类型的拷贝会直接用一个新值赋值
// 引用类型的拷贝是内存地址的赋值，引用同一个对象

// 实现思路
// 基本类型 直接赋值，引用类型进行遍历赋值

function deepClone(obj){
    var toStr = Object.prototype.toString;
    if(!obj || (toStr.call(obj) != "[object Object]"&&toStr.call(obj) != "[object Array]")){return obj};
    var newObj = toStr.call(obj) == "[object Object]" ? {}:[];
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] == "object" && obj[key] != null){
                newObj[key] = deepClone(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
        
    }
    return newObj;
}

// typeof 能识别的 属性类型 string number boolean undefined function object symbol

function deepFreeze(obj) {
    if (!obj || typeof obj !== 'object') {
        return obj;
    }
    var stack = [obj];
    while (stack.length > 0) {
        var obj_1 = stack.shift();
        Object.freeze(obj_1);
        for (var key in obj_1) {
            if (Object.prototype.hasOwnProperty.call(obj_1, key)) {
                var prop = obj_1[key];
                if (typeof prop === 'object' && !Object.isFrozen(prop)) {
                    stack.push(prop);
                }
            }
        }
    }
    return obj;
}