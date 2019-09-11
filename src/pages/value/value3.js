import React , { forwardRef, useImperativeHandle } from "react";
import styles from "./style/value.module.less";
import { Form, Input } from "antd";
import Verity from "utils/regex";
import './style/value.less';

const listData = [
  {
    id: 1,
    label: "品种",
    placeholder: "请选择品种",
    field: "Variety",
    message: "您的输入不符合规范"
  },
  {
    id: 2,
    label: "术语与定义",
    placeholder: "例：钻石完全是由碳结晶而成的矿物",
    field: "TerminologyDefinition",
    message: "您的输入不符合规范"
  },
  {
    id: 3,
    label: "年代产地",
    placeholder: "例：1999年，南非",
    field: "ChronologicalOrigin",
    message: "您的输入不符合规范"
  },
  {
    id: 4,
    label: "光泽",
    placeholder: "例：金刚光色",
    field: "Gloss",
    message: "您的输入不符合规范"
  },
  {
    id: 5,
    label: "光线特征",
    placeholder: "例：非均质集合体",
    field: "LightCharacteristics",
    message: "您的输入不符合规范"
  },
  {
    id: 6,
    label: "荧光观察",
    placeholder: "例：x光射线下天河石-很弱的绿色",
    field: "FluorescenceObservation",
    message: "您的输入不符合规范"
  }
];

function ValueThree(props,ref) {
  const { form } = props;
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

  useImperativeHandle(ref, () => ({
    form,
    validate3: () => {
      const validateArray = [];
      listData.map(item => (
        validateArray.push(item.field)
      ));
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
          <div className={styles.bar3}></div>
        </div>
      </Form>
    </div>
  );
}

export default Form.create()(forwardRef(ValueThree));
