调用 setState之后 发生了什么

1） 将传入的setState 的参数对象，与当前组件的状态合并
2）然后触发调和过程（Reconciliation）
3）根据新的状态构建react元素树
4）在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。



setState

- 不会立即改变react组件中 state的值
- 通过触发一次组建的更新，引发重绘
- 多次setState 函数调用的效果 会合并

重绘过程
- shouldComponentUpdate
- componentWillUpdate
- render(此时this.state 得到更新)
- componentDidUpdata

> 如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用 setState 不会同步更新 this.state，除此之外的setState调用会同步执行this.state。

 通过 addEventListener || setTimeout/setInterval  Promise 的方式处理的则会同步更新。


 更新机制 

 - 将多个setState的调用放进了一个队列，合并成一个来执行，这意味着当调用setState时，state并不会立即更新

 - 调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制

 - 相同的 key 会被合并为一次操作

调用 setState 之后发生了什么？

- 在 setState 的时候，React 会为当前节点创建一个 updateQueue 的更新列队。
- 然后会触发 reconciliation 过程，在这个过程中，会使用名为 Fiber 的调度算法，开始生成新的 Fiber 树， Fiber 算法的最大特点是可以做到异步可中断的执行。
- 然后 React Scheduler 会根据优先级高低，先执行优先级高的节点，具体是执行 doWork 方法。
- 在 doWork 方法中，React 会执行一遍 updateQueue 中的方法，以获得新的节点。然后对比新旧节点，为老节点打上 更新、插入、替换 等 Tag。
- 当前节点 doWork 完成后，会执行 performUnitOfWork 方法获得新节点，然后再重复上面的过程。
- 当所有节点都 doWork 完成后，会触发 commitRoot 方法，React 进入 commit 阶段。
- 在 commit 阶段中，React 会根据前面为各个节点打的 Tag，一次性更新整个 dom 元素。
