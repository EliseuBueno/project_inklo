import axios from 'axios'

const api_save = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export default api_save