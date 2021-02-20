### 简介
Math 对象保存数学公式和信息，与我们在 JavaScript 直接编写的计算功能相比，Math 对象提供的计算功能执行起来要快得多，还提供了辅助完成这些计算的属性和方法。

| 属性	| 说明 |
|----|----|
|Math.E	|自然对数的底数，即常量 e 的值|
|Math.LN10	|10 的自然对数|
|Math.LN2	|2 的自然对数|
|Math.LOG2E	|以 2 为底 e 的对数|
|Math.LOG10E	|以 10 为底 e 的对数|
|Math.PI	|π的值|
|Math.SQRT1_2	|1/2 的平方根，即 2 的平方根的倒数|
|Math.SQRT2	|2 的平方根|

### 方法

#### 最大最小

Math.min Math.max

#### 舍入
- ceil 向上舍入
- floor 向下舍入
- round 标准舍入
- trunc 去除小数部分


```
Math.floor(1.2)
1
```

#### 随机

random

#### 符号
- abs(num)  返回 num 的绝对值
- sign(num) 判断 num 的符号，负数返回 -1，0 返回 0，正数返回 1

#### 幂

- exp(num) 返回 Math.E 的 num 次幂
- expml(num) 返回 Math.E 的 num 次幂 减 1
- pow(num, power) 返回 num 的 power 次幂
- sqrt(num) 返回 num 的平方根
- cbrt(num) 返回 num 的立方根
- hypot(...values) 返回所有参数的平方和的平方根

#### 对数
- log(num) 返回 num 的自然对数
- log1p(num) 返回 num + 1 的自然对数
- log2(num) 返回 num 以 2 为底的对数
- log10(num) 返回 num 以 10 为底的对数

#### 三角函数

- acos(x) 返回 x 的反余弦值
- asin(x) 返回 x 的反正弦值
- atan(x) 返回 x 的反正切值
- acosh(x) 返回 x 的反双曲余弦值
- asinh(x) 返回 x 的反双曲正弦值
- atanh(x) 返回 x 的反双曲正切值
- cosh(x) 返回 x 的双曲余弦值
- tanh(x) 返回 x 的双曲正切值
- cos(x) 返回 x 的余弦值
- sin(x) 返回 x 的正弦值
- tan(x) 返回 x 的正切值