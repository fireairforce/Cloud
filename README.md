## Notes
云想项目前端

## Descrition
项目的页面文件主要存在pages目录下面，需要添加路由自行去`routes.js`里面去添加，格式和里面的`demo`是相同的。

如果需要使用`css_modules`

demo:
```js
import styles from 'index.module.less';
```

不使用`css_modules`正常使用文件名正常取就行了。

## Bug Meet
在使用`Upload`组件的时候遇见了一个上传状态的问题(刚开始以为遇见了`hooks`的闭包陷阱)，后来看了`antd`的[issue](https://github.com/ant-design/ant-design/issues/2423),解决了问题。

目前正在解决的问题:
当`antd`的`Form.create()`和`hooks`里面的`forwardRef()`同时作用在函数组件上面的时候，`forwardRef()`传递给从子组件传递到父组件的方法拿不到。