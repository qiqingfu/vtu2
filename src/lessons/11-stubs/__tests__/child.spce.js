import Child from "../Child";
import { mount } from "@vue/test-utils";
import axios from "axios";
import flushPromises from "flush-promises";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => "Child Message")
  };
});

describe("测试 Child.vue 组件", () => {
  test("测试 getInfo 请求的 mock 数据且正常渲染", async () => {
    const wrapper = mount(Child);
    await flushPromises();
    expect(wrapper.find("p").text()).toBe("Child Message");
  });
});
