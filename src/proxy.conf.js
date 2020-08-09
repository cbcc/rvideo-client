const PROXY_CONFIG = [
  {
    context: [
      "/api",
      "/resource"
    ],
    target: "http://localhost:8080/rvideo",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
