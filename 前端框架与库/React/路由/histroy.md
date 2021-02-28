```
<body>
  <ul>
    <li><a href='/home'>home</a></li>
    <li><a href='/about'>about</a></li>

    <div id="routeView"></div>
  </ul>
</body>
```

 // 使用 pushState 更新 url，不会导致浏览器发送请求，从而不会刷新页面

 //  replaceState 跟 pushState 的区别在于，不会记录到历史栈

//  只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()）

```
// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件
window.addEventListener('DOMContentLoaded', onLoad)
// 监听路由变化
window.addEventListener('popstate', onPopState)

// 路由视图
var routerView = null

function onLoad () {
  routerView = document.querySelector('#routeView')
  onPopState()

  // 拦截 <a> 标签点击事件默认行为， 点击时使用 pushState 修改 URL并更新手动 UI，从而实现点击链接更新 URL 和 UI 的效果。
  var linkList = document.querySelectorAll('a[href]')
  linkList.forEach(el => el.addEventListener('click', function (e) {
    e.preventDefault()
    history.pushState(null, '', el.getAttribute('href'))
    onPopState()
  }))
}

// 路由变化时，根据路由渲染对应 UI
function onPopState () {
  switch (location.pathname) {
    case '/home':
      routerView.innerHTML = 'Home'
      return
    case '/about':
      routerView.innerHTML = 'About'
      return
    default:
      return
  }
}
```