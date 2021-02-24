// 节流

// 介绍：在一个单位时间内，只能触发一次，多次触发一个生效

// 实现思路通过 闭包占用一个 开关阀实现

const throttle  = (fn,time)=>{
    let flag = true;
    return function(){
        if(!flag){return};
        flag = false;
        setTimeout(()=>{
            fn.apply(this,arguments);/*  */
            flag = true;
        },time)
    }
}

// 防抖
// 在一个单位时间内，多次触发，只执行最后一次
// 实现思路通过 闭包占用一个 定时器 

const debounce = (fn,time)=>{
    let timeout = null;
    return function(){/*  */
        let context = this;
        let  = arguments
        clearTimeout(timeout);
        setTimeout(()=>{
            fn.apply(context,arg);
        },time)        
    }
}

// setTimeout 回调函数 this 指向 window
