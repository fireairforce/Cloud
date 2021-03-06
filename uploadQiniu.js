// 一个自动上传文件到七牛云的脚本
const fs = require("fs");
const qiniu = require("qiniu");
const { resolve } = require("path");
const promisify = require("util").promisify;
const qn = require("./pushConfig").qn;
const read = promisify(fs.readdir);
const publicPath = "http://wdlj.zoomdong.xin/";
const mac = new qiniu.auth.digest.Mac(qn.accessKey, qn.secretKey);
const config = new qiniu.conf.Config();
// 华东地区的机房
config.zone = qiniu.zone.Zone_z0;
// 文件上传配置
const formUploader = new qiniu.form_up.FormUploader(config);
// 修改文件mimeType对象
const bucketManager = new qiniu.rs.BucketManager(mac, config);
const options = {
  scope: qn.bucket,
};
const putPolicy = new qiniu.rs.PutPolicy(options);
// token鉴权
const uploadToken = putPolicy.uploadToken(mac);
const putExtra = new qiniu.form_up.PutExtra();
const absoultePath = resolve(__dirname, "./build/");

const uploadFile = async (file, key) => {
  return new Promise((resolve, reject) => {
    formUploader.putFile(uploadToken, key, file, putExtra, (err, ret, info) => {
      if (err) {
        reject(err);
      } else {
        if (info.statusCode === 200) {
          resolve({ key });
        } else {
          reject(info);
        }
      }
    });
  });
};

const changeMimeType = (key) => {
  let newMine;
  if (key.indexOf("css") !== -1) {
    newMine = "text/css";
  } else if (key.indexOf("js" !== -1)) {
    newMine = "text/javascript";
  }
  return new Promise((resolve, reject) => {
    bucketManager.changeMime(qn.bucket, key, newMine, (err, ret, info) => {
      if (err) {
        reject(err);
      } else {
        if (info.statusCode === 200) {
          resolve(info);
        } else {
          reject(info);
        }
      }
    });
  });
};

const getFileName = (file) => {
  file = file.split("/");
  for (let i = 0; i < 7; i++) {
    file.shift();
  }
  return file.join("/");
};

const getStaticFile = (path) => {
  read(path).then((data) => {
    data.forEach((item) => {
      fs.stat(`${path}/${item}`, (err, stats) => {
        if (err) {
          throw new Error(err);
        } else {
          if (stats.isDirectory()) {
            getStaticFile(`${path}/${item}`);
          } else if (stats.isFile()) {
            // 只对静态资源进行了处理
            if (`${path}/${item}`.indexOf("static") !== -1) {
              uploadFile(
                `${path}/${item}`,
                getFileName(`${path}/${item}`),
              ).then((data) => {
                console.log(`${publicPath}${data.key} 上传成功啦!!!`);
                return changeMimeType(getFileName(`${path}/${item}`))
              }).then(res=>{
                console.log(`${item}的mimeType处理成功`);
              });
            } 
          }
        }
      });
    });
  });
};

getStaticFile(absoultePath);
