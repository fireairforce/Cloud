import React from "react";
import './style/index.less';
import {
    Form,
    Input,
    Button,
} from 'antd';
import Verity from 'utils/regex'
import logo from 'assets/color.png';


const listData = [{
    id: 1,
    label: "质量",
    placeholder: "例：约 5（克）",
    field: "Mass",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 2,
    label: "长",
    placeholder: "例：约 5（mm）",
    field: "Long",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 3,
    label: "宽",
    placeholder: "例：约 5（mm）",
    field: "Width",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 4,
    label: "高",
    placeholder: "例：约 5（mm）",
    field: "Height",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 5,
    label: "雕刻",
    placeholder: "请填写雕刻详情",
    field: "Carve",
    pattern: Verity.number,
    message: "您的输入不符合规范"
}];


@Form.create()
class ValueThree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            data: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log(this.props);
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

        console.log(this.state.data)
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <div className="global">
                <div className="header">
                    <p>填写表单</p>
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="banner">
                </div>
                <div className="middle">
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                        {listData.map((item)=>{
                            return (
                                <Form.Item label={item.label} key={item.id}>
                                    {getFieldDecorator(item.field, {
                                        rules: [{
                                            required: true,
                                            message: 'Please input your name',
                                        }, {
                                            pattern: item.pattern,
                                            message: item.message,
                                            },
                                        ],
                                    })(
                                        <div className="inputBanner">
                                            <Input
                                                placeholder={item.placeholder}
                                            />
                                        </div>
                                    )}
                                </Form.Item>
                            )
                        })}
                        <Form.Item {...tailFormItemLayout} className="buttonWrapper">
                            <Button type="primary" htmlType="button" className="back">
                                go back
                            </Button>
                            <Button type="primary" htmlType="submit">
                                submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="bar">

                    </div>
                </div>
            </div>
        );
    }
}


export default ValueThree;
