import React, { forwardRef, useImperativeHandle } from "react";
import styles from "./style/value.module.less";
import { Form, Input } from "antd";
import "./style/value.less";

const listData = [
  {
    id: 1,
    label: "质量",
    placeholder: "例：约 5（克）",
    field: "quality",
    message: "请填写宝石的质量"
  },
  {
    id: 2,
    label: "长",
    placeholder: "例：约 5（mm）",
    field: "length",
    message: "请填写宝石的长"
  },
  {
    id: 3,
    label: "宽",
    placeholder: "例：约 5（mm）",
    field: "width",
    message: "请填写宝石的宽"
  },
  {
    id: 4,
    label: "高",
    placeholder: "例：约 5（mm）",
    field: "height",
    message: "请填写宝石的高"
  },
  {
    id: 5,
    label: "雕刻",
    placeholder: "请填写雕刻详情",
    field: "carving",
    message: "请填写宝石的雕刻详情"
  }
];

function ValueTwo(props, ref) {
  const { form } = props;
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

  useImperativeHandle(ref, () => ({
    form,
    validate2: () => {
      const validateArray = [];
      listData.map(item => {
        validateArray.push(item.field);
      });
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
    <div className={props.class}>
      <Form layout="horizontal" {...formItemLayout}>
        <div className={styles.wrapper}>
          {listData.map(item => {
            return (
              <Form.Item label={item.label} key={item.id}>
                {getFieldDecorator(item.field, {
                  rules: [
                    {
                      required: true,
                      message: item.message
                    }
                  ]
                })(
                  <div className="inputBanner">
                    <Input placeholder={item.placeholder} />
                  </div>
                )}
              </Form.Item>
            );
          })}
          <div className={styles.bar2}></div>
        </div>
      </Form>
    </div>
  );
}

export default Form.create()(forwardRef(ValueTwo));
