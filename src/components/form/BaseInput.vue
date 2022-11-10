<template>
  <label
    v-if="label"
    class="block text-sm font-medium text-gray-700"
  >
    {{ label }}
  </label>
  <div class="mt-1">
    <input
      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      v-bind="$attrs"
      :value="modelValue"
      :min="minValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  emits: { 'update:modelValue': null },

  props: {
    label: {
      type: [String, Boolean],
      default: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
    minValue: {
      type: Number,
      default: null,
      required: false,
    },
  },
};
</script>
