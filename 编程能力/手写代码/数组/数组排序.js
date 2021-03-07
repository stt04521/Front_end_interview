// 冒泡排序
// 实现思路 双层循环，
// 第一次循环取数，第二次循环比较大小
// 如果比第一次循环的值小，进行换位，缩减循环范围

function sort(arr) {
    // 外层 控制循环趟数，每次找到一个最大值
    for (var i = 0; i < arr.length-1; i++) {
        // 内层循环,控制比较的次数，并且判断两个数的大小
        for (var j = 0; j < arr.length-1-i; j++) {
            // 如果大一些，就放到后边
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// 选择排序
// 实现思路 双层循环
// 第一次循环实现找到 最小数，放在最前面
function sort(arr) {
    var len = arr.length,min,temp;
    for (let i = 0; i < len; i++) {
        min = i;
        // 第二层找到最小数小标
        for (let j = 0; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // 最小元素移动到，最前面
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}


// 插入排序
// 实现原理，双层循环
// 第一层循环，确定有序列表起始范围，
// 第二层循环，选择何时的位置插入
function insertSort(arr){
    //获取数组的长度
    var len = arr.length;
    //i=1开始，留着0作为有序部分，也就是说，外层循环获取数组后面的元素，也就是上面所讲的无序部分
    for(var i=1;i<len;i++){
    //j=i-1，就是获取有序部分最后的一个元素作为对照，也就是有序部分
      for(var j=i-1;j>=0;j--){//注意，j--,就是从有序部分的后面元素开始和无序部分的元素作比较
        if(arr[j] > arr[j+1]){//第一个j+1也就是外层循环i，
          //互换元素，对前面数组进行排序
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }

  // 快速排序
  // 实现思路：选择基准值 mid，循环原数组，小于基准值放左边数组，大于放右边数组，然后 concat 组合，最后依靠递归完成排序。

  function quick(arr) {
      if(arr.length<=1) return arr
      let left = [],right=[],mid = arr.splice(0, 1);
      for (let i = 0; i < arr.length; i++) {
          if(arr[i]<mid){
            left.push(arr[i])
          } else {
            right.push(arr[i])
          }
      }
      return quick(left).concat(mid, quick(right)) // 别忘了 mid
  }