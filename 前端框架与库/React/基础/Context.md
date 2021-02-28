const {Provider, Consumer} = React.createContext(defaultValue);

```
<Provider value={/*共享的数据*/}>
    /*里面可以渲染对应的内容*/
</Provider>
```

```
<Consumer>
  {value => /*根据上下文  进行渲染相应内容*/}
</Consumer>
```

挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
```
class Another extends Component {
  static contextType = SOMEContext;
  render() {
    let battery = this.context;
    return <h3>{battery}</h3>;
  }
}
```