import Parent from "../Parent";
import { mount } from "@vue/test-utils";

describe("测试 Parent 组件", () => {
  test("使用 global.stubs 用虚拟组件来替代 child 组件", () => {
    const wrapper = mount(Parent, {
      global: {
        stubs: {
          ChildTwo: true
        }
      }
    });
    console.log(wrapper.html());
  });
});
