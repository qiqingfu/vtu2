import Counter from "../Counter.vue";
import { shallowMount } from "@vue/test-utils";

describe("测试 Counter 计数器组件的单个功能点", () => {
  test("当点击 button 按钮时, 应该触发一个自定义事件 increment, 值为 1", async () => {
    const wrapper = shallowMount(Counter);
    const button = wrapper.find('[data-test="button1"]');
    await button.trigger("click");
    await button.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("increment");
    expect(wrapper.emitted().increment[0][0]).toBe(1);
    expect(wrapper.emitted("increment")).toHaveLength(2);
  });

  test("当点击 button1 按钮时, 应该触发自定义事件 increment, 值为一个对象", async () => {
    const wrapper = shallowMount(Counter);
    const button = wrapper.find('[data-test="button2"]');
    await button.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("increment1");
    expect(wrapper.emitted("increment1")[0]).toEqual([
      { count: 1, isEven: false }
    ]);
    await button.trigger("click");
    expect(wrapper.emitted("increment1")[1]).toEqual([
      { count: 2, isEven: true }
    ]);
  });
});
