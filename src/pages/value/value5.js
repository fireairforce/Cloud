import React, { forwardRef, useImperativeHandle } from "react";
import styles from "./style/value.module.less";
import { Form, Input } from "antd";

const listData = [
  {
    id: 1,
    label: "折射率",
    placeholder: "例：1.645～1.690",
    field: "refraction",
    message: "请填写宝石的折射率"
  },
  {
    id: 2,
    label: "解理",
    placeholder: "例：裂",
    field: "cleavage",
    message: "请填写宝石的解理情况"
  },
  {
    id: 3,
    label: "光学效应",
    placeholder: "例：炫彩/猫眼",
    field: "special_optical",
    message: "请填写宝石的光学效应"
  },
  {
    id: 4,
    label: "抛光",
    placeholder: "请填写宝石的抛光详情",
    field: "Polishing",
    message: "请填写宝石的抛光情况"
  },
  {
    id: 5,
    label: "特殊工艺",
    placeholder: "例：审料/切割/抛光",
    field: "SpecialTechnology",
    message: "请填写宝石的特殊工艺"
  },
  {
    id: 6,
    label: "制作信息",
    placeholder: "可填写制作工厂/公司/制作人",
    field: "MakingInformation",
    message: "请填写宝石的制作信息"
  },
  {
    id: 7,
    label: "工时",
    placeholder: "填写宝石的加工工时",
    field: "WorkingHours",
    message: "请填写宝石的加工工时"
  }
];

function ValueFive(props,ref) {
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
    validate5: () => {
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
                        required: false
                      },
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
          <div className={styles.bar5}></div>
        </div>
      </Form>
    </div>
  );
}

export default Form.create()(forwardRef(ValueFive));
