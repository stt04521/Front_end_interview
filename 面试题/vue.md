 #### 1 vue data 无法监听 数组下标的变化？

出于对 性能的考虑，放弃了对下标的监听，采用对数组方法重写的当时，监听数组变化，

push pop shift unshift splice sort reverse 方法重写，返回新的数组。实现响应式的更新

#### 2 vue 是如何实现响应式的

- 原生 DOM 的绑定：Vue 在创建真实 DOM 时会调用 createElm ，默认会调用 invokeCreateHooks 。会遍历当前平台下相对的属性处理代码，其中就有 updateDOMLListeners 方法，内部会传入 add（） 方法

- 组件绑定事件，原生事件，自定义事件；组件绑定之间是通过 Vue 中自定义的 $on 方法实现的。

#### 3 vue 是异步渲染


vue 是组件级别渲染，为了性能，在本轮数据更新之后，进行异步更新

vue为了避免频繁的操作DOM,采用异步的方式更新DOM。这些异步操作会通过nextTick函数将这些操作以cb的形式放到任务队列中（以微任务优先），当每次tick结束之后就会去执行这些cb，更新DOM。

1 修改 Vue 中的 Data 时，就会触发所有和这个 Data 相关的 Watcher 进行更新。
2 首先，会将所有的 Watcher 加入队列 Queue。
3 然后，调用 nextTick 方法，执行异步任务（微任务优先尝试）。
4 在异步任务的回调中，对 Queue 中的 Watcher 进行排序，然后执行对应的 DOM 更新。

#### 4 vue nextTick
nextTick中的任务，实际上会异步执行，nextTick(callback)类似于
Promise.resolve().then(callback)，或者setTimeout(callback, 0)。 

在下一个事件循环中，添加异步任务。

类似与 setTimeOut(function(){
    //  dosomethig
},)