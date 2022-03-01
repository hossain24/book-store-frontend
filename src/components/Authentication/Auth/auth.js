import axios from "axios";

const API_URL = "http://127.0.0.1:5000/user";

const signup = (email, password) => {
    return axios
        .post(API_URL + "/signup", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const signin = (email, password) => {
    return axios
        .post(API_URL + "/signin", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            console.log(response.data);
            return response.data;
        });
};

const signout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const auth = {
    signup,
    signin,
    signout,
    getCurrentUser,
};

export default auth;