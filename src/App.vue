<template>
  <div class="container">
    <div class="col-8">
      <nav class="p-3">
        <RouterLink to="/" class="text-decoration-none mx-3">Home</RouterLink>
        <RouterLink to="/about" class="text-decoration-none me-3">About</RouterLink>
        <RouterLink :to="{ name: 'jobs' }" class="text-decoration-none">Jobs</RouterLink>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
