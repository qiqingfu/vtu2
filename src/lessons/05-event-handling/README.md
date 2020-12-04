## lesson5

> [触发自定义事件](https://vue-test-utils.vuejs.org/v2/guide/event-handling.html#event-handling)

### test1
`trigger()` 主要用于模拟用户的交互事件。

### test2
`$emit(eventName, string|object)` 发射传递的复杂对象和普通值没有什么区别。

### 结论
- 使用 `emitted()` 访问从 Vue 组件发出的事件
- `emitted(eventName)` 返回一个数组, 其中每个元素代表一次事件传递的数据
- 参数以它们发出的相同顺序存储在 `emitted(eventName)[index]` 中
