import React, { Fragment } from 'react';
import { Form } from 'antd';

function ValueSeven(props){
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

      </Fragment>
  )
}

export default Form.create()(ValueSeven);