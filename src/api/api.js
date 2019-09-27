import request from "utils/request";

// 开始估值
export const startValue = (data) =>
  request({
    url: "crystal/info/new",
    method: "post",
    token: true,
    data,
  });

// 保存草稿
export const saveValue = (data) =>
  request({
    url: "/crystal/info/draft/save",
    method: "post",
    token: true,
    data,
  });

// 获取草稿
export const getValue = () =>
  request({
    url: "/crystal/info/draft/get",
    method: "get",
    token: true,
  });

// 获取大类信息
export const getAllcategories = () =>
  request({
    url: "/crystal/price/all_main_categories",
    method: "get",
    token: true,
  });
