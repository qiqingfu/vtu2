/**
 * Created by qiqf on 2020/12/5
 */
import Layout from "../Layout";
import { mount } from "@vue/test-utils";

describe("测试 Layout 组件, 学习插槽相关测试", () => {
  test("test1 默认插槽 default", () => {
    const defaultMessage = "Hello,World!";
    const wrapper = mount(Layout, {
      slots: {
        default: defaultMessage
      }
    });
    expect(wrapper.find("main").text()).toBe(defaultMessage);
  });

  test("test2 具名插槽", () => {
    const wrapper = mount(Layout, {
      slots: {
        foot: "It is footer content"
      }
    });
    expect(wrapper.find("footer").text()).toBe("It is footer content");
  });

  test("test3 作用域插槽", () => {
    const wrapper = mount(Layout, {
      props: {
        title: "EveryBody"
      },
      slots: {
        title: `
          <template #title="{title}">
           <h1 data-test="h-tag">Hello,{{ title }}</h1>
          </template>
        `
      }
    });
    expect(wrapper.find("[data-test='h-tag']").text()).toBe("Hello,EveryBody");
  });
});
