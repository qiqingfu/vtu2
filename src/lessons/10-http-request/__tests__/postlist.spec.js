import PostList from "../PostList";
import { mount } from "@vue/test-utils";
import axios from "axios";
import flushPromises from "flush-promises";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => [
      { id: 1, title: "title1" },
      { id: 2, title: "title2" }
    ])
  };
});

describe("PostList 组件", () => {
  test("test1: 测试发送异步 ajax 请求测试", async () => {
    const wrapper = mount(PostList);
    await wrapper.get("button").trigger("click");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/posts");

    await flushPromises();
    const posts = wrapper.findAll("[data-test='post']");
    expect(posts).toHaveLength(2);
    expect(posts[0].text()).toContain("title1");
    expect(posts[1].text()).toContain("title2");
  });

  test("test1: 当点击 button 按钮发送异步请求时 loading 应该为 true, 请求结束后 loading 为 false", async () => {
    const wrapper = mount(PostList);
    expect(wrapper.find('[role="alert"]').exists()).toBe(false);
    expect(wrapper.find("button").attributes()).not.toHaveProperty("disabled");
    await wrapper.find("button").trigger("click");
    expect(wrapper.find('[role="alert"]').exists()).toBe(true);
    expect(wrapper.find("button").attributes()).toHaveProperty("disabled");
    await flushPromises();
    expect(wrapper.find('[role="alert"]').exists()).toBe(false);
    expect(wrapper.find("button").attributes()).not.toHaveProperty("disabled");
  });
});
