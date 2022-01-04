import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-backend-samitti.herokuapp.com/",
});

export default instance;