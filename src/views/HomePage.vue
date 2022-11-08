<template>
  <div class="border-4 border-indigo-600 bg-slate-500 p-10">
    <h1>Home</h1>
    <button
      type="button"
      class="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      @click="goToCreateReport"
    >
      Создать рапорт
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToCreateReport() {
      this.$router.push({ path: "report" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
