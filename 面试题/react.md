#### 1 react setSate 是异步 还是同步

对生命周期或者合成事件包裹了一层try { // 执行，更新放队列 } finally { // 更新state }，最后在finally中进行的state更新。所谓的异步并不是真正的异步，而是先将更新放在了队列里面，当代码执行完后，再(在 finally 中)一次性处理这些更新

#### 2 强制更新界面 forceUpdate

会直接调用 render，跳过 shouldComponentUpdate()
