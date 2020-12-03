## lesson4

> 有条件的渲染

如何呈现组件以及验证它是否正确呈现组件。

### test1
`wrapper.find()` 用于根据选择器、标签等查找已渲染的元素节点。

如果`get（）`没有返回与选择器匹配的元素，它将引发错误，并且测试将失败。

### test2
使用 `find()` 和 `exists()` 来验证一个元素是否存在。

`exists()` 验证 find 找到的元素节点是否存在。

### test3
向测试组件内传入特定的 data 数据, 如果 data 中还有其他属性，请不用担心-Vue Test Utils会将两者合并在一起。 安装选项中的 data 将优先于任何默认值。

### test4
`isVisible()` 验证元素是否可见, 可检查如下规则：
1. display: none, visibility: hidden, opacity :0 style
2. `<details>` tag
3. 元素或其祖先元素具有 hidden 属性