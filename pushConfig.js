module.exports = {
  Push: {
    modules: [
      {
        name: "测试环境",
        env: "dev",
        ssh: {
          host: "47.95.194.10",
          port: 22,
          username: "root",
          password: "Wd1344492820."
        },
        buildCommand: "build",
        localPath: "./build",
        remotePath: "/var/www/cloud/build"
      }
    ]
  },
  Qiniu: {
    ACCESS_KEY: "hXqlX1gyAC9EhwXhmldXDbnN51fV7zDCkDBezSmc",
    SECRET_KEY: "XQk_zdHSre92uJUl5eFqtfonBZZgzq0jnVX13rvS",
    bucket: "zoomdong",
    path: ""
  },
  qn: {
    accessKey: "hXqlX1gyAC9EhwXhmldXDbnN51fV7zDCkDBezSmc",
    secretKey: "XQk_zdHSre92uJUl5eFqtfonBZZgzq0jnVX13rvS",
    bucket: "zoomdong",
    path: "",
  }
};
