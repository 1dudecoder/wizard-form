import axios from 'axios'

const baseURL = process.env.REACT_APP_MY_API_URL

const axiosInstance = axios.create({
    baseURL : baseURL,
})

export default axiosInstance;