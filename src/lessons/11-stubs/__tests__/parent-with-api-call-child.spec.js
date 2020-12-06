import ParentWithAPICallChild from "../ParentWithAPICallChild"
import ComponentWithAsyncCall from "../ComponentWithAsyncCall"
import { mount, shallowMount } from "@vue/test-utils"

describe('ParentWithAPICallChild.vue', () => {
  it('renders with mount and does initialize API call', () => {
    const wrapper = mount(ParentWithAPICallChild, {
      global: {
        stubs: {
          ComponentWithAsyncCall: true
          // 废弃通知: 提供一个字符串的方式, 如 "<div class='stub'></div>" 已经被废弃不再被支持了
          // ComponentWithAsyncCall: "<div class='stub'></div>"
        }
      }
    })
    console.log(wrapper.html())
    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })

  it("use shallowMount", () => {
    const wrapper = shallowMount(ParentWithAPICallChild)
    console.log(wrapper.html())
    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })
})