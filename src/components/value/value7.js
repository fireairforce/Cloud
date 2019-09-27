import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Form, Radio, Input, Upload, Modal, Icon } from "antd";
import styles from "./style/value.module.less";
import { getToken } from "utils/qiniu";

// 七牛默认的上传地址
const QINIU_SERVER = "http://upload.qiniup.com";
// bucket绑定的URL
const BASE_QINIU_URL = "http://wdlj.zoomdong.xin/";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

function ValueSeven({form,classStep}, ref) {
  const { getFieldDecorator } = form;
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [token, setToken] = useState("");
  const [fileList, setFileList] = useState([]);
  const [fileList1, setFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);
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
    if (fileItem.status === "removed") {
      fileList.pop();
    }
    setFileList([...fileList]);
  };

  const handleChange1 = ({ file, fileList }) => {
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
    if (fileItem.status === "removed") {
      fileList.pop();
    }
    setFileList1([...fileList]);
  };

  const handleChange2 = ({ file, fileList }) => {
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
    if (fileItem.status === "removed") {
      fileList.pop();
    }
    setFileList2([...fileList]);
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

  useImperativeHandle(ref, () => ({
    form,
    validate7: () => {
      const validateArray = [
        "cert_report",
        "cert_report_picture",
        "cert_body",
        "cert_date",
        "cert_examiner",
        "reward_info",
        "record_article",
        "name_predict",
        "record_condition",
      ];
      let error = "";
      let value = {};
      form.validateFields(validateArray, (err, values) => {
        error = err;
        value = values;
      });
      return [error, value];
    }
  }));
  return (
    <div className={classStep}>
      <Form layout="horizontal" {...formItemLayout}>
        <div className={styles.wrapper}>
          <FormItem label="您的宝石是否有鉴定报告" {...formItemLayout}>
            {getFieldDecorator("cert_report", {
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
            {getFieldDecorator("cert_report_picture", {
              rules: [
                {
                  required: false
                }
              ]
            })(
              <div className={styles.upload}>
                <div className={styles.uploadItem}>
                  <Upload
                    action={QINIU_SERVER}
                    data={{ token }}
                    listType="picture-card"
                    beforeUpload={getUploadToken}
                    fileList={fileList1}
                    onPreview={handlePreview}
                    onChange={handleChange1}
                  >
                    {fileList1.length >= 1 ? null : uploadButton}
                  </Upload>
                  <span>请上传报告正面</span>
                </div>
                <div className={styles.uploadItem}>
                  <Upload
                    action={QINIU_SERVER}
                    data={{ token }}
                    listType="picture-card"
                    beforeUpload={getUploadToken}
                    fileList={fileList2}
                    onPreview={handlePreview}
                    onChange={handleChange2}
                  >
                    {fileList2.length >= 1 ? null : uploadButton}
                  </Upload>
                  <span>请上传报告反面</span>
                </div>
              </div>
            )}
          </FormItem>

          <FormItem label="鉴定机构" {...formItemLayout}>
            {getFieldDecorator("cert_body", {
              rules: [
                {
                  required: false
                }
              ]
            })(<Input placeholder="请填写宝石的鉴定机构" />)}
          </FormItem>

          <FormItem label="鉴定时间" {...formItemLayout}>
            {getFieldDecorator("cert_date", {
              rules: [
                {
                  required: false
                }
              ]
            })(<Input placeholder="请填写宝石的鉴定时间，例：2018.1.2" />)}
          </FormItem>

          <FormItem label="鉴定人/团队" {...formItemLayout}>
            {getFieldDecorator("cert_examiner", {
              rules: [
                {
                  required: false
                }
              ]
            })(<Input placeholder="请填写宝石的鉴定人或团队" />)}
          </FormItem>

          <FormItem label="您的宝石是否有名称及获奖？" {...formItemLayout}>
            {getFieldDecorator("reward_info", {
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
            {getFieldDecorator("record_article", {
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
            {getFieldDecorator("name_predict", {
              rules: [
                {
                  required: false
                }
              ]
            })(<Input placeholder="请描述宝石的名称寓意" />)}
          </FormItem>

          <FormItem label="获奖情况" {...formItemLayout}>
            {getFieldDecorator("record_condition", {
              rules: [
                {
                  required: false
                }
              ]
            })(<Input placeholder="请描述宝石的获奖情况" />)}
          </FormItem>
          <div className={styles.bar7}></div>
        </div>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img style={{ width: "100%" }} src={previewImage} alt="previewImg" />
        </Modal>
      </Form>
    </div>
  );
}

export default Form.create()(forwardRef(ValueSeven));
