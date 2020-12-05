<template>
  <div>
    <header>
      <slot name="title" :title="title">{{ title }}</slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="foot">Thanks for visiting.</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Layout",
  setup() {},
  props: {
    title: {
      type: String,
      default: "Welcome!"
    }
  }
};
</script>

<style scoped></style>
