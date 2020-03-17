const PROXY_CONFIG = {
  "/v2": {
    "target": "https://test.focus.bi/v2",
    "pathRewrite": {
      "^/v2": ""
    },
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
};

module.exports = PROXY_CONFIG;
