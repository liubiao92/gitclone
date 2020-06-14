// 掌握 http 协议之后, 会发现其他请求库也很简单, 不管是 axios 还是 axandroid...
// 这个库比较大的好处是直接返回 promise, 这样的话可以直接用 async 和 await
// 但是自己封装也很简单
import axios from 'axios'

class Ajax_api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl || 'http://localhost:8000/api/todo'
    }

    get(path) {
        let url = this.baseUrl + path
        return axios.get(url).then(r => r.data)
    }

    post(path, data) {
        let url = this.baseUrl + path
        return axios.post(url, data).then(r => r.data)
    }
}

export default Ajax_api
