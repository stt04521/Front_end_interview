// sort 

var arr = [];

function unique(arr){
    var array = arr.concat().sort();
    var newArr = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] != array[index+1]){
            newArr.push(array[index])/*  */
        }
    }
    return newArr;
}

// es6 Set 
function unique(arr){
    return Array.from(new Set(arr))
}

// for 循环 然后，splice 去重

function unique(arr){
    for (let index = 0; index < arr.length; index++) {
        for (let j = index + 1; j < arr.length; j++) {
            if(arr[index]  == arr[j]){
                arr.splice(j,1);
                j --;
            }
        }
    }
    return arr
}

// for 循环，indexOf

function name(array) {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(newArr.indexOf(element)==-1){
            newArr.push(array[index]);
        }
    }
}

// 双循环 判断第二个数组，是否包含第一个

function name(array) {
    let newArr = [array[0]];
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        let flag = true;
        for (let j = 0; j < array.length; j++) {
           if(element == array[j]){
               flag  =  false;
               break;
           }
        }
        if(flag){
            newArr.push(element);
        }
    }
    return newArr;
}

// 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，如果不等则说明该元素是重复元素
function name(params) {
    return Array.prototype.filter.call(params,function (item,index) {
       return params.indexOf(item)==index
    })
}

// 利用 obj 属性唯一

function name(params) {
    let res = [],
        obj = {};
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        if(obj[element]){
            obj[element]++
        } else {
            res.push(element);
            obj[element] = 1
        }
        
    }
}

// reduce includes
function name(params) {
    params.reduce((preResult,current)=>{
        if(!preResult.includes(current)){
            preResult.push(current)
        }
        return preResult
    },[])
}