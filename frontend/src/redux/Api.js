import axios from 'axios'

export default axios.create({
    baseURL: process.env.NODE_ENV === "production" ? `${process.env.REACT_APP_PRODUCTION_PORT}/api` : `${process.env.REACT_APP_DEVELOPMENT_SERVER_PORT}/api`,
    withCredentials: true,
    credentials: "include",
});