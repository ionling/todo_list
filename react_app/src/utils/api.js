import axios from "axios";
import util from "./util";

const axiosInstance = axios.create({
    baseURL: `http://localhost:8624/api`,
});

if (util.isLogined())
    axiosInstance.defaults.headers.common[
        "Authorization"
    ] = `Token ${util.getToken()}`;

export default axiosInstance;
