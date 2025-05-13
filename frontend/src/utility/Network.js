// Api Call functions
import axios from "axios";
import urlConfigs from "./urlConfig";

const BaseApiUrl = import.meta.env.VITE_API_URL


// Post Call Function
export const postCall = async (postData = {}) => {
  let url = BaseApiUrl;
  let bodyData = {};
  let headers = {
    "Content-Type": "application/json",
  };

  if (postData.accessToken && postData.accessToken === "false") {
    delete headers["Authorization"];
  } else {
    const token = localStorage.getItem("apiToken");
    if (token) headers["Authorization"] = token?.jwtToken;
  }

  if (postData.bodyData) {
    bodyData = postData.bodyData;
  }

  if (postData.header) {
    headers = { ...headers, ...postData.header };
  }

  if (postData.fullUrl) {
    url = postData.fullUrl;
  }

  if (postData.url) {
    url += urlConfigs[postData.url];
  }

  if (postData.callBackData) {
    postData.bodyData["callBackData"] = postData.callBackData;
  }

  return await axios
    .post(url, bodyData, { headers })
    .then((response) => {
      postData.successCallBack &&
        postData.successCallBack(response, postData.bodyData);
      return response;
    })
    .catch((error) => {
      postData.errorCallBack && postData.errorCallBack(error);
      return error;
    });
};

// Put Call Function
export const putCall = async (putData = {}) => {
  let url = BaseApiUrl;
  let bodyData = {};
  let headers = {
    "Content-Type": "application/json",
  };

  if (putData.accessToken && putData.accessToken === "false") {
    delete headers["Authorization"];
  } else {
    const token = localStorage.getItem("apiToken");
    if (token) headers["Authorization"] = token?.jwtToken;
  }

  if (putData.bodyData) {
    bodyData = putData.bodyData;
  }

  if (putData.header) {
    headers = { ...headers, ...putData.header };
  }

  if (putData.fullUrl) {
    url = putData.fullUrl;
  }

  if (putData.url) {
    url += urlConfigs[putData.url];
  }

  if (putData.baseUrl) {
    url = BaseUrl + urlPillars[putData.baseUrl];
  }

  return axios
    .put(url, bodyData, { headers })
    .then((response) => {
      putData.successCallBack && putData.successCallBack(response);
      return response;
    })
    .catch((error) => {
      putData.errorCallBack && putData.errorCallBack(error);
      return error;
    });
};

// Get Call Function
export const getCall = async (getData = {}) => {
  let url = BaseApiUrl;
  let headers = {
    "Content-Type": "application/json",
  };

  if (getData.accessToken && getData.accessToken === "false") {
    delete headers["Authorization"];
  } else {
    const token = localStorage.getItem("apiToken");
    if (token) headers["Authorization"] = token?.jwtToken;
  }

  if (getData.fullUrl) {
    url = getData.fullUrl;
  }

  if (getData.url) {
    url += urlConfigs[getData.url];
  }

  if (getData.baseUrl) {
    url = BaseUrl + urlPillars[getData.baseUrl];
  }

  if (getData.headers) {
    headers = { ...headers, ...getData.headers };
  }

  if (getData.urlParams && Object.entries(getData.urlParams).length) {
    for (const [key, value] of Object.entries(getData.urlParams)) {
      if (key) {
        if (url.indexOf("?") >= 0) {
          url += `&${key}=${value}`;
        } else {
          url += `?${key}=${value}`;
        }
      }
    }
  }

  return await axios
    .get(url, { headers })
    .then((response) => {
      getData.successCallBack && getData.successCallBack(response, getData);
      return response;
    })
    .catch((error) => {
      getData.errorCallBack && getData.errorCallBack(error);
      return error;
    });
};

// Delete Call Function
export const deleteCall = async (deleteData = {}) => {
  let url = BaseApiUrl;
  let bodyData = {};
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  if (deleteData.accessToken && deleteData.accessToken === "false") {
    delete headers["Authorization"];
  } else {
    const token = localStorage.getItem("apiToken");
    if (token) headers["Authorization"] = token?.jwtToken;
  }

  if (deleteData.bodyData) {
    bodyData = { ...bodyData, ...deleteData.bodyData };
  }

  if (deleteData.header) {
    headers = { ...headers, ...deleteData.header };
  }

  if (deleteData.fullUrl) {
    url = deleteData.fullUrl;
  }

  if (deleteData.url) {
    url += urlConfigs[deleteData.url];
  }

  if (deleteData.urlParams && Object.entries(deleteData.urlParams).length) {
    for (const [key, value] of Object.entries(deleteData.urlParams)) {
      if (key) {
        if (url.indexOf("?") >= 0) {
          url += `&${key}=${value}`;
        } else {
          url += `?${key}=${value}`;
        }
      }
    }
  }

  return await axios
    .delete(url, {
      headers,
      data: bodyData,
    })
    .then((response) => {
      deleteData.successCallBack &&
        deleteData.successCallBack(response, deleteData);
      return response;
    })
    .catch((error) => {
      deleteData.errorCallBack && deleteData.errorCallBack(error, deleteData);
      return error;
    });
};
