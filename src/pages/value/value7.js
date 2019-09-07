import React, { useState } from "react";
import { Form, Radio, Input, Upload, Modal, Icon } from "antd";
import styles from "./style/value.module.less";
import { getToken } from "utils/qiniu";
import './style/value.less';

// 七牛默认的上传地址
const QINIU_SERVER = "http://upload.qiniup.com";
// bucket绑定的URL
const BASE_QINIU_URL = "http://wdlj.zoomdong.xin/";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function ValueSeven(props) {
  const { getFieldDecorator } = props.form;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [token, setToken] = useState("");
  const [fileList, setFileList] = useState([]);
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
            <FormItem label="您的宝石是否有鉴定报告" {...formItemLayout}>
              {getFieldDecorator("jdbg", {
                rules: [
                  {
                    required: true,
                    message: "请选择是否有鉴定报告"
                  }
                ]
              })(
                <RadioGroup initialValue={0}>
                  <Radio value={0}>是</Radio>
                  <Radio value={1}>否</Radio>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem label="上传鉴定报告扫描件" {...formItemLayout}>
              {getFieldDecorator("smj", {
                rules: [
                  {
                    required: false
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem label="鉴定机构" {...formItemLayout}>
              {getFieldDecorator("jdjg", {
                rules: [
                  {
                    required: false
                  }
                ]
              })(<Input placeholder="请填写宝石的鉴定机构" />)}
            </FormItem>

            <FormItem label="鉴定时间" {...formItemLayout}>
              {getFieldDecorator("jdsj", {
                rules: [
                  {
                    required: false
                  }
                ]
              })(<Input placeholder="请填写宝石的鉴定时间，例：2018.1.2" />)}
            </FormItem>

            <FormItem label="您的宝石是否有名称及获奖？" {...formItemLayout}>
              {getFieldDecorator("sfhj", {
                rules: [
                  {
                    required: true,
                    message: "请选择获奖情况"
                  }
                ]
              })(
                <RadioGroup initialValue={0}>
                  <Radio value={0}>是</Radio>
                  <Radio value={1}>否</Radio>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem label="上传品牌/文章/获奖文件等 " {...formItemLayout}>
              {getFieldDecorator("hjwj", {
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
                  <span className={styles.value1Content}>请上传扫描件</span>
                </>
              )}
            </FormItem>

            <FormItem label="名称寓意" {...formItemLayout}>
              {getFieldDecorator("mcyy", {
                rules: [
                  {
                    required: false
                  }
                ]
              })(<Input placeholder="请描述宝石的名称寓意" />)}
            </FormItem>

            <FormItem label="获奖情况" {...formItemLayout}>
              {getFieldDecorator("hjqk", {
                rules: [
                  {
                    required: false
                  }
                ]
              })(<Input placeholder="请描述宝石的获奖情况" />)}
            </FormItem>
        </div>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img style={{ width: "100%" }} src={previewImage} alt="previewImg" />
        </Modal>
      </Form>
    </div>
  );
}

export default Form.create()(ValueSeven);
