import React, { useState, useImperativeHandle,forwardRef } from "react";
import { Form, Input, Select, Upload, Icon, Modal } from "antd";
import styles from "./style/value.module.less";
import { getToken } from "utils/qiniu";
import { valueOption1 } from "utils/options";
import './style/value.less';
// 七牛默认的上传地址
const QINIU_SERVER = "http://upload.qiniup.com";
// bucket绑定的URL
const BASE_QINIU_URL = "http://wdlj.zoomdong.xin/";
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

function ValueOne(props,ref) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [token, setToken] = useState("");
  const [fileList, setFileList] = useState([]);
  const { form } = props;
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 }
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
    const { uid ,name, type, thumbUrl, status, response = {} } = file;
    const fileItem = {
      uid,
      name,
      type,
      thumbUrl,
      status,
      url: BASE_QINIU_URL + (response.hash || "")
    };
    fileItem.preview = fileItem.url;
    fileList.pop();
    fileList.push(fileItem);
    setFileList([...fileList]);
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

  const validate = () => {
    form.setFieldsValue({
      pic:fileList[0].url
    })
    const validateArray = [
       'name',
       'color',
       'transparent',
       'pic',
       'description'
    ]
    form.validate(validateArray,(err,values)=>{
      if(!err){
        console.log(values);
      }
    })
  }

  useImperativeHandle(ref,()=>({
    form,
    validate1:()=>{
      validate()
    },
  }));

  return (
    <div className={props.class}>
      <Form layout="horizontal">
        <div className={styles.wrapper}>
            <FormItem label="宝玉石名称" {...formItemLayout}>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "请选择宝石"
                  }
                ]
              })(
                <Select placeholder="请选择宝石">
                  {valueOption1.map(item => (
                    <Option key={item.id} value={item.id}>
                      {item.value}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>

            <FormItem label="颜色" {...formItemLayout}>
              {getFieldDecorator("color", {
                rules: [
                  {
                    required: true,
                    message: "请填写宝石颜色"
                  }
                ]
              })(<Input placeholder="例：无色/接近无色/绿色/淡紫色" />)}
            </FormItem>

            <FormItem label="透明度" {...formItemLayout}>
              {getFieldDecorator("transparent", {
                rules: [
                  {
                    required: true,
                    message: "请填写宝石透明度"
                  }
                ]
              })(<Input placeholder="例：透明到不透明/透明" />)}
            </FormItem>

            <FormItem label="上传你要估值宝石的照片" {...formItemLayout}>
              {getFieldDecorator("pic", {
                rules: [
                  {
                    required: true,
                    message: "请上传宝石照片"
                  }
                ]
              })(
                <>
                <Upload
                  action={QINIU_SERVER}
                  data={{token}}
                  listType="picture-card"
                  beforeUpload={getUploadToken}
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 4 ? null : uploadButton}
                </Upload>
                <span className={styles.value1Content}>您最多只能上传四张图片</span>
                </>
              )}
            </FormItem>

            <FormItem label="外观描述" {...formItemLayout} className={styles.value1desc}>
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: true,
                    message: "请填写外观描述"
                  }
                ]
              })(
                <TextArea
                  rows={4}
                  placeholder="例：它呈浅-中等色调的蓝色，有时呈淡绿色，内含物少，单行输入"
                />
              )}
            </FormItem>
        </div>
        <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
          <img style={{ width: "100%" }} src={previewImage} alt="previewImg" />
        </Modal>
      </Form>
    </div>
  );
}


export default Form.create()(forwardRef(ValueOne));