function curry(fn, args=[]) {
    return function() {
        let newArgs = args.concat(Array.prototype.slice.call(arguments))
        if (newArgs.length < fn.length) { // 假如：实参个数 < 形参个数
            return curry.call(this, fn, newArgs)
        } else {
            return fn.apply(this, newArgs)
        }
    }
}

// 实现思路 如果 实参小于 形参，
// 就接着返回原来的函数，对参数进行闭包，占用