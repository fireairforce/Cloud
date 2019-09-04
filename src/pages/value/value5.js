import React from "react";
import './style/value.less';
import {
    Form,
    Input
} from 'antd';
import Verity from 'utils/regex'


const listData = [{
    id: 1,
    label: "矿物组成",
    placeholder: "例：含水百分数可变的二氧化硅",
    field: "MineralComposition",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 2,
    label: "化学成分",
    placeholder: "例：CaCo3、（Mg，Fe）2SiO4",
    field: "ChemicalComponents",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 3,
    label: "结晶状态",
    placeholder: "例：晶体、胶体",
    field: "CrystalState",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 4,
    label: "显微结构",
    placeholder: "例：结构、包裹体、石英、水胆",
    field: "MicroStructure",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
},{
    id: 5,
    label: "摩式硬度",
    placeholder: "例：5.5-6.5",
    field: "Hardness",
    pattern: Verity.number,
    message: "您的输入不符合规范"
},{
    id: 6,
    label: "密度",
    placeholder: "例：1.99-2.23",
    field: "Density",
    pattern: Verity.chinese,
    message: "您的输入不符合规范"
}];


@Form.create()
class ValueFive extends React.Component {

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


export default ValueFive;
