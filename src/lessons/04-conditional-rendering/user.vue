<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
    <ul v-show="shouldShowDropdown" id="user-dropdown">
      <!-- dropdown content -->
    </ul>
  </nav>
</template>
<script>
export default {
  name: "ConDitional-Rendering",
  data() {
    return {
      admin: false,
      shouldShowDropdown: false,
    };
  },
};
</script>