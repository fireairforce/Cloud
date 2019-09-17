export default {
  axiosOptions(config) {
    return {
      timeout: 30000,
      headers: config.token ? { token: "someway to get token" } : {},
      baseURL: "http://cloudthink.elatis.cn/" // set request base url
    };
  }
};
