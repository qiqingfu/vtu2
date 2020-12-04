import Password from "../Password.vue"
import { mount } from "@vue/test-utils"

describe("测试 Password 组件, 主要学习 data 和 props 的默认设置", () => {
  test("test1: 测试当 password 长度小于 minLength 时, 报错信息节点应该存在", () => {
    const wrapper = mount(Password, {
      data() {
        return {
          password: "123456"
        }
      },
      props: {
        minLength: 8
      }
    })
    expect(wrapper.find('[data-test="error-msg"]').exists()).toBe(true)
  })
})