import React, { useState, Fragment } from "react";
import { Form, Upload, Modal, Icon } from "antd";
import { getToken } from "utils/qiniu";

// 七牛默认的上传地址
const QINIU_SERVER = "http://upload.qiniup.com";
// bucket绑定的URL
const BASE_QINIU_URL = "";
const FormItem = Form.Item;

function Demo(props) {
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
    <Fragment>
      <Form>
        <FormItem label="上传文件 " {...formItemLayout}>
          {getFieldDecorator("scwj", {
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
            </>
          )}
        </FormItem>
      </Form>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img style={{ width: "100%" }} src={previewImage} alt="previewImg" />
      </Modal>
    </Fragment>
  );
}

export default Demo;
