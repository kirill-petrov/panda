<template>
  <div class="helper">
    <form
      class="helper space-y-8 divide-y divide-gray-200"
      @submit.prevent="submitData"
    >
      <div class="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 class="text-lg font-medium leading-6 text-gray-900">ФИО заказчика</h3>
            <p class="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-2">
              <BaseInput
                type="text"
                label="Фамилия"
                v-model.trim="customer.surname"
                required="true"
              />
            </div>

            <div class="sm:col-span-2">
              <BaseInput
                type="text"
                label="Имя"
                v-model.trim="customer.name"
                required="true"
              />
            </div>

            <div class="sm:col-span-2">
              <BaseInput
                type="text"
                label="Отчество"
                v-model.trim="customer.patronymic"
              />
            </div>
          </div>
        </div>

        <div class="pt-8">
          <div>
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-2">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
              >
                Фамилия
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="first-name"
                class="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="last-name"
                class="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="street-address"
                class="block text-sm font-medium text-gray-700"
              >
                Объект
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label
                for="street-address"
                class="block text-sm font-medium text-gray-700"
              >
                Наименование и марка техники
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <!-- todo: Время прибытие убытия ремонта -->
            <div class="sm:col-span-2">
              <label for="city" class="block text-sm font-medium text-gray-700">
                City
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="state"
                class="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="state"
                  id="state"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="zip" class="block text-sm font-medium text-gray-700">
                ZIP / Postal
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  autocomplete="postal-code"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <button
            type="button"
            class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            @click="$router.go(-1)"
          >
            Cancel
          </button>
          <button
            class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/form/BaseInput.vue";

export default {
  components: { BaseInput },
  data() {
    return {

      customer: {
        surname: '',
        name: '',
        patronymic: '',
      },
      employee: "",
      object: "",
      machine: "",
      driver: "",
      notes: "",
      arrival: "",
      departure: "",
      repairTime: "",
      totalTime: "00:00",
    };
  },
  methods: {
    submitData() {
      console.log("submitData");
    },
    LOG(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
