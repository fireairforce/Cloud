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

## Now

目前正在进行请求对接

- 问题
  Value3 页面那里好像接口少个"品种"的字段。

以及完成产品的新的原型图

Value1 的接口过了

```
name
color
transparency
picture_url
exterior
```

Value2 接口过了

```
quality
length
width
height
carving
```

Value3 接口

```
品种  无
definition
age_place
luster
optical
fluorescence
```

Value4 接口

```
mineral_structure
chemical_structure
结晶状态　无
microscopic
mohs
density
```

Value5 接口

```
refraction
cleavage
special_optical
抛光　无
特殊工艺　无
制作信息　无
工时　无
```

Value6 接口

```
infrared
法律文件　无
托管和存放　无
holder_valuation
third_valuation
```

Value7 接口

```
是否有鉴定报告　无
cert_report_picture
cert_body
cert_date
cert_examiner
宝石是否获奖　无
上传品牌文件等　无
名称寓意　无
获奖情况　无
```

```js
{
  componentMap.map((FormItem, index) => {
    return (
      /* eslint-disable no-alert, no-eval */
      <FormItem
        key={`Value${index}`}
        class={stepIndex === index ? "" : "hide"}
        wrappedComponentRef={eval(`validateRef${index}`)}
        stepIndex={stepIndex === index ? index + 1 : ""}
      />
      /* eslint-disable no-alert, no-eval */
    );
  });
}
```
