<template>
  <!-- Navigation -->
  <nav>
    <ul class="my-3 flex justify-center gap-4">
      <li>
        <router-link to="/" class="hover:border-b-2 hover:border-indigo-600"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          to="/tailwind"
          class="hover:border-b-2 hover:border-indigo-600"
          >tailwind-preview</router-link
        >
      </li>
    </ul>
  </nav>

  <!-- Content -->
  <div class="px-4">
    <router-view />
  </div>
</template>

<style lang="scss">
nav a.router-link-active {
  color: tomato;
}

.helper {
  margin: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px dashed #666;
}
</style>
