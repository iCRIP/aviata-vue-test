"use strict";

import Vue from 'vue';
import axios from "axios";
import api from '@/api';

const apiURL = process.env.VUE_APP_API_URL || '';
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = baseURL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);
const _api = api(apiURL, _axios);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Vue.api = _api;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
    api: {
      get() {
        return _api;
      }
    },
    $api: {
      get() {
        return _api;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
