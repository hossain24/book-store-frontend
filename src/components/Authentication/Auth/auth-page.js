import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://remote-library-node.azurewebsites.net";

const getAllBooks = () => {
    return axios.get(API_URL + "/books")
};

const getAllOrders = () => {
    return axios.get(API_URL + "/orders", { headers: authHeader() });
};

const authPage = {
    getAllBooks,
    getAllOrders,
};

export default authPage;