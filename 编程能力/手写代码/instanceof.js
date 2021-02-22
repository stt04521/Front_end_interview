// 判断 构造函数 在不在原型链上，从左边的原型链寻找，右边的函数

function instanceof_ (left,right){
    left = left._proto_;

    while (left != right.prototype){
        instanceof_(left,right);
        if(left == null){
            return false;
        }
    }
    return true;
}

