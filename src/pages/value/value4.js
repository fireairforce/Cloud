import React from "react";
import './style/value.less';
import {
    Form,
    Input
} from 'antd';
import Verity from 'utils/regex'

const listData = [{
    id: 1,
    label: "品种",
    placeholder: "请选择品种",
    field: "Variety",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 2,
    label: "术语与定义",
    placeholder: "例：钻石完全是由碳结晶而成的矿物",
    field: "TerminologyDefinition",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 3,
    label: "年代产地",
    placeholder: "例：1999年，南非",
    field: "ChronologicalOrigin",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 4,
    label: "光泽",
    placeholder: "例：金刚光色",
    field: "Gloss",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 5,
    label: "光线特征",
    placeholder: "LightCharacteristics",
    field: "Hardness",
    pattern: Verity.number,
    message: "您的输入不符合规范"
},{
    id: 6,
    label: "荧光观察",
    placeholder: "例：x光射线下天河石-很弱的绿色",
    field: "FluorescenceObservation",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
}];


@Form.create()
class ValueFour extends React.Component {

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

        return (
            <div className="wrapper">
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
                    </Form>
                    <div className="bar">
         
                    </div>
                </div>
            </div>
        );
    }
}


export default ValueFour;
