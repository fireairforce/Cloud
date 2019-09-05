import React, { Fragment, useState } from "react";
import { Form, Input, Select, Upload, Icon } from "antd";
import Verity from "utils/regex";
import styles from "./style/value.module.less";

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function ValueOne(props) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ]);
  const { getFieldDecorator } = props.form;
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
  // 选项权利
  const options = [
    {
      value: "玛瑙",
      id: 0
    },
    {
      value: "翡翠",
      id: 1
    },
    {
      value: "珍珠",
      id: 2
    },
    {
      value: "钻石",
      id: 3
    },
    {
      value: "蓝宝石",
      id: 4
    }
  ];
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleChange = ({ fileList }) => {
    setFileList({ fileList });
  };

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  return (
    <Fragment>
      <Form>
        <div className={styles.wrapper}>
          <Form layout="horizontal">
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
                  {options.map(item => (
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
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
              )}
            </FormItem>

            <FormItem label="外观描述" {...formItemLayout}>
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
          </Form>
        </div>
      </Form>
    </Fragment>
  );
}

export default Form.create()(ValueOne);
