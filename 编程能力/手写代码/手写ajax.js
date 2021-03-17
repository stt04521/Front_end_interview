function ajax() {
    let request;
    if(window.ActiveXObject){
        request =  new ActiveXObject("Microsoft.XMLHTTP");
      }else if(window.XMLHttpRequest){
        request =  new XMLHttpRequest();
      }
    request.open('get', 'https://www.google.com')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <300) {
                let string = request.responseText
                let object = JSON.parse(string)
            }
        }
    }
    request.send()
}

// 1 创建 XMLHttpRequest
// 2 XMLHttpRequest open
// 3 onreadystatechange 回调事件
// 4 send 发送