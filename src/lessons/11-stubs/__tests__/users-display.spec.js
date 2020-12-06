import UsersDisplay from "../UsersDisplay"
import { mount } from "@vue/test-utils"
import flushPromises from "flush-promises"

test("测试 UsersDisplay 组件异步请求后正确渲染内容", async () => {
  const wrapper = mount(UsersDisplay)
  await flushPromises()
  expect(wrapper.html()).toContain("Hello")
})