// var promise = new Promise(function(resolve,reject){
//     if(some){
//         resolve()
//     } else {
//         reject()
//     }
// })

// promise.then(function(res){

// },function(err){

// }).then(function(){

// })

// 实现思路
// 1 三个状态 1 pending 2 resolved 3 rejected
// 2 promise 回调参数 接收两个参数 resolve reject
// 3 回调执行之后，调用resolve 与 reject
// 4 保存失败与成功状态的值
// 5 状态只能从 pending 到 resolved 或者 pending 到 rejecred
// 6 then 方法 两个参数，接收成功与失败结果
// 7 如果then 抛出 err，传递给下一个 then的 失败回调
// 8 then 可以注册，多个回调，需要队列 对回调进行保存
// 9 注册回调事件的时候，如果还处于加载状态，则对回调事件进行收集，等待执行


// Promise 内部状态
const STATUS = { PENDING: 'PENDING', FUFILLED: 'FUFILLED', REJECTED: 'REJECTED' }

class Promise {
    constructor(excutor){
        this.status = STATUS.PENDING;
        this.value = undefined
        this.reason = undefined;
        this.reasonCb = [];
        this.rejectCb = [];
        const resolve = (value)=>{
            if(this.status = STATUS.PENDING){
                this.status = STATUS.FUFILLED;
                this.value = value;
                this.reasonCb.forEach(fn=>fn())
            }
        }
        const reject = (error)=>{
            if(this.status = STATUS.PENDING){
                this.status = STATUS.REJECTED;
                this.reason = error;
                this.rejectCb.forEach(fn=>fn())
            }
        }

        try {
            excutor(resolve,reject)
        } catch (error) {
            reject(error)
        }

    }

    then(resolve,reject){
        if(this.status == STATUS.FUFILLED){
            resolve(this.value);
        }
        if(this.status == STATUS.REJECTED){
            reject(this.reason)
        }
        // 注册回调事件的时候，如果还处于加载状态，则对回调事件进行收集，等待执行
        if(this.status == STATUS.PENDING){
            this.reasonCb.push(()=>{
                resolve(this.value);
            })
            this.reject.push(()=>{
                reject(this.reason);
            })
        }
    }
}
