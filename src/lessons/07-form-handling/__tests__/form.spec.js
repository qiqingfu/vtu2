import Form from "../Form.vue";
import { mount } from "@vue/test-utils";

describe("Form", () => {
  test("测试 Form 组件通过 setValue 设置值", async () => {
    const wrapper = mount(Form);
    await wrapper.find("[type='email']").setValue("123456@qq.com");
    expect(wrapper.vm.email).toBe("123456@qq.com");
  });

  test("测试通过 setValue 设置 data 后, 触发 click 事件", async () => {
    const wrapper = mount(Form);
    const val = "123456@qq.com";
    await wrapper.setValue(val);
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("submit");
  });
});
