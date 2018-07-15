import axios from "axios";

export default axios.create({
    baseURL: `http://localhost:8624/api`,
});
