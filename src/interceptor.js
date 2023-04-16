import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true


axios.interceptors.response.use(undefined, err => {
    return new Promise(() => {
        throw err
    })
})
