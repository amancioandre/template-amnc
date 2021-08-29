class Api {
    constructor(config) {
        if (!Api._instance) {
            this._axios = axios.create(config)
            Api._instance = this
        }
        return Api._instance
    }

    get() {
        console.log("Hello world")
    }
}

const api = new Api({})
Object.freeze(api)