## lesson9 异步行为

当在应用程序中修改 vue 中已观察的 data 数据后, vue 会开启异步更新队列机制, 进行批量更新 DOM, 由于 Jest 测试运行程序是同步执行的, 所以会导致一定的问题。

## 总结
1. 使用 await nextTick() 确保在测试继续之前 DOM 已更新
2. 使用 flush-promises 解决非 Vue 依赖项所有未解决的 Promise
