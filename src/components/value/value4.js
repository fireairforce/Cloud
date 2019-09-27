import React, { forwardRef, useImperativeHandle } from "react";
import styles from "./style/value.module.less";
import { Form, Input } from "antd";

const listData = [
  {
    id: 1,
    label: "矿物组成",
    placeholder: "例：含水百分数可变的二氧化硅",
    field: "mineral_structure",
    message: "请填写宝石的矿物组成"
  },
  {
    id: 2,
    label: "化学成分",
    placeholder: "例：CaCo3、（Mg，Fe）2SiO4",
    field: "chemical_structure",
    message: "请填写宝石的化学成分"
  },
  {
    id: 3,
    label: "结晶状态",
    placeholder: "例：晶体、胶体",
    field: "crystal_system",
    message: "请填写宝石的结晶状态"
  },
  {
    id: 4,
    label: "显微结构",
    placeholder: "例：结构、包裹体、石英、水胆",
    field: "microscopic",
    message: "请填写宝石的显微结构"
  },
  {
    id: 5,
    label: "摩式硬度",
    placeholder: "例：5.5-6.5",
    field: "mohs",
    message: "请填写宝石的摩式硬度"
  },
  {
    id: 6,
    label: "密度",
    placeholder: "例：1.99-2.23",
    field: "density",
    message: "请填写宝石的密度"
  }
];

function ValueFour({form,classStep}, ref) {
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
    validate4: () => {
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
    <div className={classStep}>
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
          <div className={styles.bar4}></div>
        </div>
      </Form>
    </div>
  );
}

export default Form.create()(forwardRef(ValueFour));
