import React, { Fragment } from "react";
import styles from "./style/main.module.less";
import {  Upload, Form } from "antd";

const FormItem = Form.Item;

function ValueSix(props) {
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
  return(
      <Fragment>
        <Form>
          <div className={styles.wrapper}>
             <Form layout="horizontal" {...formItemLayout}>
               
             </Form>
          </div>
        </Form>
      </Fragment>
  )
}

export default Form.create()(ValueSix);
