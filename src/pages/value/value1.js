import React, { Fragment } from "react";
import { Form, Input, Select } from "antd";
import Verity from "utils/regex";
import styles from "./style/value.module.less";

const FormItem = Form.Item;
const Option = Select.Option;

function ValueOne(props) {
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
              })(<Input placeholder="例：透明到不透明/透明" />)}
            </FormItem>

            <FormItem label="外观描述" {...formItemLayout}>
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: true,
                    message: "请填写外观描述"
                  }
                ]
              })(<Input placeholder="例：它呈浅-中等色调的蓝色，有时呈淡绿色，内含物少，单行输入" />)}
            </FormItem>

          </Form>
        </div>
      </Form>
    </Fragment>
  );
}

export default Form.create()(ValueOne);
