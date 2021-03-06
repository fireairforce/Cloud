import React, { forwardRef, useImperativeHandle } from "react";
import styles from "./style/value.module.less";
import { Form, Input } from "antd";
import verity from "utils/regex";

const listData = [
  {
    id: 1,
    label: "质量",
    placeholder: "例：约 5（克）",
    field: "quality",
    message: "请填写宝石的质量",
    verity: verity.number,
    word:'请按规范填写数字'
  },
  {
    id: 2,
    label: "长",
    placeholder: "例：约 5（mm）",
    field: "length",
    message: "请填写宝石的长",
    verity: verity.number,
    word:'请按规范填写数字'
  },
  {
    id: 3,
    label: "宽",
    placeholder: "例：约 5（mm）",
    field: "width",
    message: "请填写宝石的宽",
    verity: verity.number,
    word:'请按规范填写数字'
  },
  {
    id: 4,
    label: "高",
    placeholder: "例：约 5（mm）",
    field: "height",
    message: "请填写宝石的高",
    verity: verity.number,
    word:'请按规范填写数字'
  },
  {
    id: 5,
    label: "雕刻",
    placeholder: "请填写雕刻详情",
    field: "carving",
    message: "请填写宝石的雕刻详情"
  }
];

function ValueTwo({form,classStep}, ref) {
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
    validate2: () => {
      const validateArray = [
        "quality",
        "length",
        "width",
        "height",
        "carving"
      ];
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
      <div >
    <div className={classStep}>
      <Form layout="horizontal" {...formItemLayout}>
        <div className={styles.wrapper}>
          {listData.map(item => {
            return (
              <Form.Item label={item.label} key={item.id}>
                {getFieldDecorator(item.field, {
                  rules: [{
                    pattern:item.verity?item.verity:'',
                    message: item.word?item.word:'',
                  },
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
      </div>
  );
}

export default Form.create()(forwardRef(ValueTwo));
