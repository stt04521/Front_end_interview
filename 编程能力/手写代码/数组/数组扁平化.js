// 1 toSting & split

function name(params) {
    return params.toSting().split(",").map(function (item) {
        return Number(item)
    })
}

// 2 reduce
function flatten(params) {
    params.reduce(function (total,item) {
        return Array.isArray(item) ? total.concat(flatten(item)) : total.concat(item);
    },[])
}

// 3 递归

function flatten(params) {
    var newArr = [];
    params.map(function (item) {
        if(Array.isArray(item)){
            newArr = newArr.concat(flatten(item)) 
        } else {
            newArr.push(item)
        }
    })
    return newArr;
}

/// 扩展运算符

function flatten(arr) {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

// 实现思想，编辑数组，如果一个子项为数组，对子项进行递归遍历，
// 直到子项不为数组，停止遍历，与之前的结果进行 concat

