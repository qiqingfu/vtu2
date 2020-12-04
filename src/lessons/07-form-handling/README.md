## lesson7
最主要的两个方法是 `setValue` 和 `trigger`。

setValue 可以与所有类型表单一起使用。确保在 DOM 更新之后执行断言。**如果调用 setValue() 不传递任何值的话, 那么它默认设置选中状态**


## 总结
1. 使用 setValue 设置 DOM 输入和 Vue 组件上的值。
2. 使用 trigger 触发 DOM 事件，包括带和不使用修饰符
3. 触发事件时额外的事件对象可以通过 trigger 的第二个参数进行设置
4. 尽量不要断言组件实例上的数据

