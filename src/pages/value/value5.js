import React from "react";
import styles from "./style/value.module.less";
import { Form, Input } from "antd";
import Verity from "utils/regex";
import './style/value.less';

const listData = [
  {
    id: 1,
    label: "折射率",
    placeholder: "例：1.645～1.690",
    field: "RefractiveIndex",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
  },
  {
    id: 2,
    label: "解理",
    placeholder: "例：裂",
    field: "Cleavage",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
  },
  {
    id: 3,
    label: "光学效应",
    placeholder: "例：炫彩/猫眼",
    field: "OpticalEffect",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
  },
  {
    id: 4,
    label: "抛光",
    placeholder: "请填写宝石的抛光详情",
    field: "Polishing",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
  },
  {
    id: 5,
    label: "特殊工艺",
    placeholder: "例：审料/切割/抛光",
    field: "SpecialTechnology",
    pattern: Verity.number,
    message: "您的输入不符合规范"
  },
  {
    id: 6,
    label: "制作信息",
    placeholder: "可填写制作工厂/公司/制作人",
    field: "MakingInformation",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
  },
  {
    id: 7,
    label: "工时",
    placeholder: "填写宝石的加工工时",
    field: "WorkingHours",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
  }
];

function ValueFive(props) {
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
                        pattern: item.pattern,
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
        </div>
      </Form>
    </div>
  );
}

export default Form.create()(ValueFive);
