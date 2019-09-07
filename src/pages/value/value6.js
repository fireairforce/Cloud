import React, { useState } from "react";
import styles from "./style/value.module.less";
import { Upload, Form, Icon, Input, Modal } from "antd";
import { getToken } from "utils/qiniu";
import './style/value.less';

// 七牛默认的上传地址
const QINIU_SERVER = "http://upload.qiniup.com";
// bucket绑定的URL
const BASE_QINIU_URL = "http://wdlj.zoomdong.xin/";
const FormItem = Form.Item;

function ValueSix(props) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [token, setToken] = useState("");
  const [fileList, setFileList] = useState([]);
  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };

  const handlePreview = file => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewVisible(true);
  };

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handleChange = ({ file, fileList }) => {
    const { uid, name, type, thumbUrl, status, response = {} } = file;
    const fileItem = {
      uid,
      name,
      type,
      thumbUrl,
      status,
      url: BASE_QINIU_URL + (response.hash || "")
    };
    fileList.pop();
    fileList.push(fileItem);
    setFileList(fileList);
  };

  const getUploadToken = () => {
    const token = getToken();
    setToken(token);
  };

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">上传</div>
    </div>
  );

  return (
    <div className={props.class}>
      <Form layout="horizontal" {...formItemLayout}>
        <div className={styles.wrapper}>
          <FormItem label="上传红外光谱" {...formItemLayout}>
            {getFieldDecorator("hongwai", {
              rules: [
                {
                  required: false
                }
              ]
            })(
              <>
                <Upload
                  action={QINIU_SERVER}
                  data={{ token }}
                  listType="picture-card"
                  beforeUpload={getUploadToken}
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <span className={styles.value1Content}>
                  请上传宝石的红外光谱图
                </span>
              </>
            )}
          </FormItem>

          <FormItem label="上传法律文件" {...formItemLayout}>
            {getFieldDecorator("lawyer", {
              rules: [
                {
                  required: false
                }
              ]
            })(
              <>
                <Upload
                  action={QINIU_SERVER}
                  data={{ token }}
                  listType="picture-card"
                  beforeUpload={getUploadToken}
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <span className={styles.value1Content}>
                  请上传法律文件的扫描件
                </span>
              </>
            )}
          </FormItem>

          <FormItem label="托管与存放" {...formItemLayout}>
            {getFieldDecorator("save", {
              rules: [
                {
                  required: false
                }
              ]
            })(<Input placeholder="请描述宝石的托管与存放信息" />)}
          </FormItem>

          <FormItem label="持有人出价" {...formItemLayout}>
            {getFieldDecorator("peoplemoney", {
              rules: [
                {
                  required: false
                }
              ]
            })(<Input placeholder="请填写数据采集的实时价格" />)}
          </FormItem>

          <FormItem label="第三方估值" {...formItemLayout}>
            {getFieldDecorator("guessvalue", {
              rules: [
                {
                  required: false
                }
              ]
            })(<Input placeholder="请填写第三方估值" />)}
          </FormItem>
        </div>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img style={{ width: "100%" }} src={previewImage} alt="previewImg" />
        </Modal>
      </Form>
    </div>
  );
}

export default Form.create()(ValueSix);
