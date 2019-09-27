## Notes

云想项目前端

## Descrition

项目的页面文件主要存在 pages 目录下面，需要添加路由自行去`routes.js`里面去添加，格式和里面的`demo`是相同的。

如果需要使用`css_modules`

demo:

```js
import styles from "index.module.less";
```

不使用`css_modules`正常使用文件名正常取就行了。

## Bug Meet

在使用`Upload`组件的时候遇见了一个上传状态的问题(刚开始以为遇见了`hooks`的闭包陷阱)，后来看了`antd`的[issue](https://github.com/ant-design/ant-design/issues/2423),解决了问题。

目前正在解决的问题:
当`antd`的`Form.create()`和`hooks`里面的`forwardRef()`同时作用在函数组件上面的时候，`forwardRef()`传递给从子组件传递到父组件的方法拿不到。(已解决，后续对代码优化一下)

目前考虑的的问题应该是线上部署的问题(首先要做的分开开发环境和生产环境，然后在生产环境里面配置一下相对应的`plugin`应该就可以完成上线).

但是目前发现一个问题`cra`这个库里面并不支持`webpack`的`publicPath`这个配置，因此上线的文件并不会自带`path`，可能需要自己弄一下。

调底部button到表单内容在footer里改margin-top值就可以。
页面二的高随stepIndex改变，当StepIndex === 1的时候就可以正常显示

## 接口情况

```json
{
    "name": "钻石啊",
    "categories_id": 1,
    "quality": 1.5,
    "shape": {
        "length": 0.1,
        "height": 0.3,
        "width": 0.2
    },
    "picture_url": [
        "http://cdn.elatis.cn/archives/313/66613251_p0_2.png",
        "http://cdn.elatis.cn/archives/271/56866134_p0.jpg"
    ],
    "crystal_info": {
        "carving": "雕刻",
        "definition": "术语与定义",
        "age_place": "年代与产地",
        "mineral_structure": "主要矿物组成",
        "chemical_structure": "主要化学组成",
        "exterior": "外观描述",
        "color": "颜色",
        "luster": "光泽",
        "transparency": "透明度",
        "cleavage": "解理",
        "optical": "光线特征",
        "mohs": "摩氏硬度",
        "density": "密度",
        "refraction": "折射率",
        "fluorescence": "荧光观察",
        "infrared": "红外光谱",
        "microscopic": "显微结构",
        "special_optical": "光学效应",
        "crystal_system": "晶系",
        "dispersion": "抛光",
        "others": {
            "working_hours":"工时",
            "special_technology":"特殊工艺",
            "make_infomation":"制作信息",   
            "variety":"品种",   
            "lawyer_file":"法律文件",
            "save":"托管和存放"
        }
    },
    "third_valuation": 19000.5,
    "holder_valuation": 35000.5,
    "certification_info": {
        "cert_report":"是否存在报告",
        "cert_report_picture": [
            "http://cdn.elatis.cn/archives/313/66613251_p0_2.png",
            "http://cdn.elatis.cn/archives/271/56866134_p0.jpg"
        ],
        "cert_body": "鉴定机构",
        "cert_date": "2019-09-15",
        "cert_examiner": "鉴定人"
    },
    "reward_info": {
        "reward": "是否获奖",
        "record_article":"上传获奖文章",
        "record_condition":"获奖情况",
        "name_predict":"名称寓意"
    }
}
```