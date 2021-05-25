import axios from "axios";

const API_URL = "http://localhost:8080/user/";

const authenticate = (username, password) => {
  return axios
    .post(API_URL + "authenticate", {
      username,
      password,
    })
    .then((response) => {
      console.log("response from authenticate service", response);
      if (response.data.jwtToken) {
        localStorage.setItem("authorization", response.data.jwtToken);
      }
      return response.data;
    })
    .catch((error) => {
      console.error("Error from authenticate service", error);
    });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      console.log("response from login service", response);
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((error) => {
      console.error("Error from login service", error);
    });
};

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    password,
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  const value = localStorage.getItem("user");
  return value;
};

export default {
  authenticate,
  register,
  login,
  logout,
  getCurrentUser,
};
