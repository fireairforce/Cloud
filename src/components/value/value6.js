import React, { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./style/value.module.less";
import { Upload, Form, Icon, Input, Modal } from "antd";
import { getToken,base_url } from "utils/qiniu";
import verity from "utils/regex";

// 七牛默认的上传地址
const QINIU_SERVER = "http://upload.qiniup.com";
// bucket绑定的URL
const BASE_QINIU_URL = base_url;
const FormItem = Form.Item;

function ValueSix({form,classStep}, ref) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [token, setToken] = useState("");
  const [fileList1, setFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const { getFieldDecorator } = form;

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

  const getUploadToken = type => {
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
    validate6: () => {
      const validateArray = [
        "infrared",
        "lawyer_file",
        "save",
        "holder_valuation",
        "third_valuation",
      ];
      let error = "";
      let value = {};
      form.validateFields(validateArray, (err, values) => {
        error = err;
        value = values;
        if(fileList1.length!==0){
          fileList1.map(item=>{
            value.infrared = item.url;
          })
        }
        if(fileList2.length!==0){
          fileList2.map(item=>{
            value.lawyer_file = item.url;
          })
        }
      });
      return [error, value];
    }
  }));
  return (
    <div className={classStep}>
      <Form layout="horizontal" {...formItemLayout}>
        <div className={styles.wrapper}>
          <FormItem label="上传红外光谱" {...formItemLayout}>
            {getFieldDecorator("infrared", {
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
                  fileList={fileList1}
                  onPreview={handlePreview}
                  onChange={handleChange1}
                >
                  {fileList1.length >= 1 ? null : uploadButton}
                </Upload>
                <span className={styles.value1Content}>
                  请上传宝石的红外光谱图
                </span>
              </>
            )}
          </FormItem>

          <FormItem label="上传法律文件" {...formItemLayout}>
            {getFieldDecorator("lawyer_file", {
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
                  fileList={fileList2}
                  onPreview={handlePreview}
                  onChange={handleChange2}
                >
                  {fileList2.length >= 1 ? null : uploadButton}
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
            {getFieldDecorator("holder_valuation", {
              rules: [{
                pattern: verity.number,
                message:'请按照规范填写'
              },
                {
                  required: false
                }
              ]
            })(<Input placeholder="请填写数据采集的实时价格" />)}
          </FormItem>

          <FormItem label="第三方估值" {...formItemLayout}>
            {getFieldDecorator("third_valuation", {
              rules: [{
                pattern: verity.number,
                message:'请按照规范填写'
              },
                {
                  required: false
                }
              ]
            })(<Input placeholder="请填写第三方估值" />)}
          </FormItem>
          <div className={styles.bar6}></div>
        </div>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img style={{ width: "100%" }} src={previewImage} alt="previewImg" />
        </Modal>
      </Form>
    </div>
  );
}

export default Form.create()(forwardRef(ValueSix));
