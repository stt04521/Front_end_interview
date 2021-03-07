function sumBigNumber(a, b) {
    var res = '',
        temp = 0;
    a = a.split('');
    b = b.split('');
    // 两个数组进行分拆，转为数组
    while (a.length || b.length || temp) {
        // 数组最后一位 进行相加，temp 表示 上一次运算，是否又进位
        temp += ~~a.pop() + ~~b.pop();
        // 最后一位计算的结果，进行相加，temp去除余数相加
        res = (temp % 10) + res;
        // 表示此次计算是否进一
        temp = temp > 9;
    }
    return res.replace(/^0+/, '');
}

// ~~ 转换数字 向下取整，undefined 转化为0
// Number(undefined) 会转为为 NaN

