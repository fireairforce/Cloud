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
    label: "折射率",
    placeholder: "例：1.645～1.690",
    field: "MineralComposition",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 2,
    label: "解理",
    placeholder: "例：裂",
    field: "ChemicalComponents",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 3,
    label: "光学效应",
    placeholder: "例：炫彩/猫眼",
    field: "CrystalState",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 4,
    label: "抛光",
    placeholder: "请填写宝石的抛光详情",
    field: "MicroStructure",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 5,
    label: "特殊工艺",
    placeholder: "例：审料/切割/抛光",
    field: "Hardness",
    pattern: Verity.number,
    message: "您的输入不符合规范"
},{
    id: 6,
    label: "制作信息",
    placeholder: "可填写制作工厂/公司/制作人",
    field: "Density",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 7,
    label: "工时",
    placeholder: "填写宝石的加工工时",
    field: "Density",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
}];


@Form.create()
class ValueSix extends React.Component {

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
                                        rules: [
                                            {
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


export default ValueSix;
