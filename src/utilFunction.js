import axios from "axios";
const URL = 'https://a65e018cd203.ngrok.io/';

export const getAPIS = async (endpoint, params) => {
  try {
    const { data } = await axios.get(`${URL}${endpoint}`, {
      params,
    });
    return data;
  } catch (error) {
    if (error.response) {
      if (error.response.status===401) {
        logoutUser()/// condition token expired
      }
    }
    return { ...error.response.data, error: true };
  }
};

export const postAPIS = async (endpoint, data) => {
  const config = {
    method: "post",
    url: `${URL}${endpoint}`,
    data,
  };

  try {
    const { data } = await axios(config);

    return data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      if (error.response.status===401) {
        logoutUser()/// condition token expired
      }
    }
    return { ...error.response.data,  error: true };
  }
};

export const loginInUdser = (token,user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  window.location = "/home";
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location = "/";
};

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
