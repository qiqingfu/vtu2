import User from "../user.vue";
import { mount } from "@vue/test-utils";

describe("测试 User 组件的功能", () => {
  test("id 属性为 profile 的节点默认应该显示", () => {
    const wrapper = mount(User);
    expect(wrapper.find("#profile").text()).toEqual("My Profile");
  });

  test("id 属性为 admin 的节点默认是不显示的", () => {
    const wrapper = mount(User);
    expect(wrapper.find("#admin").exists()).toBe(false);
  });

  test("给 User 组件填充默认的 data 数据, 并验证 admin 组件存在", () => {
    const wrapper = mount(User, {
      data() {
        return {
          admin: true
        };
      }
    });
    expect(wrapper.find("#admin").text()).toEqual("Admin");
  });

  test("检查 id 属性为 user-dropdown 元素的 visible 可见性为假", () => {
    const wrapper = mount(User);
    expect(wrapper.find("#user-dropdown").isVisible()).toBe(false);
  });

  test("当设置默认的 shouldShowDropdown 为 true时, #user-dropdown 元素的可见性为真", () => {
    const wrapper = mount(User, {
      data() {
        return {
          shouldShowDropdown: true
        };
      }
    });
    expect(wrapper.find("#user-dropdown").isVisible()).toBe(true);
  });
});
