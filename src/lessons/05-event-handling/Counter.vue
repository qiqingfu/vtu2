<template>
  <div>
    <button @click="handleClick" data-test="button1">Button</button>
    <button @click="handleClick1" data-test="button2">Button1</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Counter",
  setup(props, { emit }) {
    let count = ref(0);
    const handleClick = () => {
      count.value = count.value + 1;
      emit("increment", count.value);
    };

    const handleClick1 = () => {
      count.value = count.value + 1;
      emit("increment1", {
        count: count.value,
        isEven: count.value % 2 === 0
      });
    };

    return {
      count,
      handleClick,
      handleClick1
    };
  }
};
</script>
