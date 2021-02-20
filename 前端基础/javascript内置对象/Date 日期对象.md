### 创建 

使用自 UTC 1970 年 1 月 1 日零时开始经过的毫秒数来保存日期。保存的日期能够精确到 1970 年 1 月 1 日之前或之后的 285 616 年。

#### 当前时间

```
new Date()
```
> 客户端本地的时间

#### 特定时间

Date.parse() 接受一个表示日期的字符串参数，返回相应的日期毫秒数。会因地区和实现而异，一般接受以下格式：

- 月/日/年 ，如: 6/13/2014
- 英文月名 日，年 ，如：january 12,2014
- 英文星期名 英文月名 日 年 时：分：秒 时区 ，如：Tue May 25 2014 00:00:00 GMT-0700
- ISO 8601 扩展格式 YYYY-MM-DDTHH:mm:ss.sssZ ，如：2014-05-25T00:00:00

如果传入的字符串不能表示日期，会返回 NaN

Date.UTC() 同样会返回表示日期的毫秒数，但它在构建时使用不同的信息。

- 年份、从 0 开始的月份（0-11），两个是必须的
- 日期（1-31）、小时数（0-23）、分钟、秒以及毫秒数
- 时间是基于 GMT


两个 Date 实例相减，得到的就是两个标准时间相差的毫秒数
Date 实例进行 date*1 / date/1 等也会得到毫秒数，实际上就是通过 Number() 方法就可以转换为毫秒数，所以只要能够进行类型转换的都可以
getTime 方法
 
> Date.now() 返回调用这个方法时的日期和时间的毫秒数，简化了使用 Date 对象分析代码的工作

两个 Date 实例相减，得到的就是两个标准时间相差的毫秒数
Date 实例进行 date*1 / date/1 等也会得到毫秒数，实际上就是通过 Number() 方法就可以转换为毫秒数，所以只要能够进行类型转换的都可以
getTime 方法

### 继承的方法

与其他引用类型一样，Date 类型也重写了 toLocaleString()、toString() 和 valueOf() 方法

toLocaleString() 会按照与浏览器设置的地区相适应的格式返回日期和时间，意味着时间格式中会包含 AM 或 PM，但不会包含时区信息，格式因浏览器而异

toString() 通常会返回带有时区信息的日期和时间

valueOf() 返回日期的毫秒表示

### 日期格式方法

toDateString() 以特定的实现格式显示星期几、月、日和年

toTimeString() 以特定的格式显示时、分、秒和时区

toLocaleDateString() 区别地区的显示星期几、月、日和年

toLocaleTimeString() 以特定的格式显示时、分、秒

toUTCString() 以特定的实现格式显示完整的 UTC 日期


直接取得和设置日期值中特定部分的方法。UTC 日期指的是在没有时区偏差的情况下（将日期转化为 GMT 时间）的日期值

### 4. 日期/时间组件方法

- getTime() 返回表示日期的毫秒数，与 valueOf 方法返回的值相同
- setTime() 以毫秒数设置日期，会改变整个日期
- getFullYear() 取得 4 位数的年份
- getUTCFullYea()r 返回 UTC 日期的 4 位数年份
- setFullYear() 设置日期的年份，传入的值必须是 4 位数
- setUTCFullYear() 设置 UTC 日期中的年份，传入的值必须是 4 位数
- getMonth() 返回日期中的月份，从 0 - 11
- getUTCMonth() 返回 UTC 日期中的月份
- setMonth() 设置日期中的月份，传入值必须大于 0 ，超出 11 则增加年份
- setUTCMonth() 设置 UTC 日期中的月份，传入值必须大于 0 ，超出 11 则增加年份
- getDate() 返回日期月份中的天数，从 1 - 31
- getUTCDate() 返回 UTC 日期月份中的天数，从 1 - 31
- setDate() 设置日期月份中的天数，传入值超过应有天数，月份增加
- setUTCDate() 设置 UTC 日期月份中的天数，传入值超过应有天数，月份增加
- getDay() 返回日期中的星期，从 1 - 6
- getUTCDay() 返回 UTC 日期中的星期，从 1 - 6
- getHours() 返回日期中的小时数，从 0 - 23
- getUTCHours() 返回 UTC 日期中的小时数，从 0 - 23
- setHours() 设置日期中的小时数，超出 23，则相应增加天数
- setUTCHours() 设置 UTC 日期中的小时数，超出 23，则相应增加天数
- getMinutes() 返回日期中的分钟数，从 0 - 59
- getUTCMinutes() 返回 UTC 日期中的分钟数，从 0 - 59
- setMinutes() 设置日期中的分钟数，超出59，则增加小时数
- setUTCMinutes() 设置UTC 日期中的分钟数，超出59，则增加小时数
- getSeconds() 返回日期中的秒数，从 0 - 59
- getUTCSeconds() 返回 UTC 日期中的秒数，从 0 - 59
- setSeconds() 设置日期中的秒数，超出59，则增加分钟数
- setUTCSeconds() 设置 UTC 日期中的秒数，超出59，则增加分钟数
- getMilliseconds() 返回日期中的毫秒数
- getUTCMilliseconds() 返回 UTC 日期中的毫秒数
- setMilliseconds() 设置日期中的毫秒数
- setUTCMilliseconds() 设置 UTC 日期中的毫秒数
- getTimezoneOffset() 返回本地时间与 UTC 时间相差的分钟数
