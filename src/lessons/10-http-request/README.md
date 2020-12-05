## lesson10

测试 HTTP 请求的主要目标是测试该组件, 而无需实际访问 API, 不然会创建缓慢的测试。


flushPromises 是要求在下一轮事件循环之前, 要求 Vue 的异步更新队列中的所有更新都完成。确保在断言之前已完成 DOM 的更新。

## 目标
1. 学习 jest.mock 的引用
2. 理解 flush-promises 的作用

### test1 
模拟 axios 的请求方法

### test2
在请求过程中更改 DOM 的状态。

## 总结
1. vue-test-utils 不需要特殊的工具来测试 HTTP 请求
2. jest.mock 
3. flushPromises 能确保异步操作后的 DOM 更新

