// 发布订阅模式实现模块间的完全解耦，模块只需要关注 事件的注册与触发

// 注册事件 触发事件 移除事件 只允许触发一次

class eventBus {
    constructor(){
        this.task = {}
    }

    on(name,fn){
        let taskQueue = this.task[name];
        if(!taskQueue){
            this.task[name] = [];
        } else {
            typeof fn == 'function' && taskQueue.push(fn);
        }
    }

    emit(name,...args){
        let taskQueue = this.task[name];
        if(taskQueue && taskQueue.length > 0){
            taskQueue.forEach(fn => {
                fn(...args);
            });
        }
    }

    off(name,fn){
        let taskQueue = this.task[name];
        if(taskQueue && taskQueue.length>0){
            if(typeof fn === "function"){
                let index = taskQueue.indexOf(fn);
                index!=-1 && taskQueue.splice(index,1);
            }
            if(typeof fn === "undefined"){
                taskQueue.length = 0;
            }
        }
    }

    once(name,fn){ // 单次监听，事件触发完之后，结束事件监听
        let cb = (...agrs)=>{
            this.off(name);
            fn(...agrs)
        };       
        typeof fn == "function" && this.on(name,cb)
    }
}
