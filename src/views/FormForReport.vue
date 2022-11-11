<template>
  <div class="mb-20">
    <form
      id="report-form"
      class="space-y-8 divide-y divide-gray-200"
      @submit.prevent="submitData"
    >
      <div class="space-y-8 divide-y divide-gray-200">
        <div>
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            ФИО заказчика
          </h3>

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div
              v-for="field of fieldsWithNames"
              :key="field.label"
              class="sm:col-span-2"
            >
              <BaseInput
                v-model.trim="customer[field.name]"
                :type="field.type"
                :label="field.label"
                :required="field.required"
              />
            </div>
          </div>
        </div>

        <div class="pt-8">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            ФИО водителя
          </h3>

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div
              v-for="field of fieldsWithNames"
              :key="field.label"
              class="sm:col-span-2"
            >
              <BaseInput
                v-model.trim="driver[field.name]"
                :type="field.type"
                :label="field.label"
                :required="field.required"
              />
            </div>
          </div>
        </div>

        <div class="pt-8">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            ФИО исполнителя
          </h3>

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div
              v-for="field of fieldsWithNames"
              :key="field.label"
              class="sm:col-span-2"
            >
              <BaseInput
                v-model.trim="employee[field.name]"
                :type="field.type"
                :label="field.label"
                :required="field.required"
              />
            </div>

            <div class="sm:col-span-6">
              <BaseInput
                v-model="object"
                label="Объект"
                type="text"
              />
            </div>

            <div class="sm:col-span-6">
              <BaseInput
                v-model="car"
                label="Наименование и марка техники"
                type="text"
              />
            </div>

            <div class="sm:col-span-6">
              <label
                for="comment"
                class="block text-sm font-medium text-gray-700"
              >
                Примечания
              </label>
              <div class="mt-1">
                <textarea
                  id="comment"
                  v-model="comment"
                  rows="3"
                  class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div
              v-for="field of fieldsWithTime"
              :key="field.name"
              class="sm:col-span-2"
            >
              <BaseInput
                v-model="time[field.name]"
                :type="field.type"
                :label="field.label"
                :required="field.required"
                :min-value="field.minValue"
              />
            </div>

            <div class="sm:col-span-6">
              <div
                v-if="dataError"
                class="rounded-md bg-red-50 p-4"
              >
                <div class="flex">
                  <div class="flex-shrink-0">
                    <XCircleIcon
                      class="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm text-red-700">
                      Проверьте параметры времени
                    </p>
                  </div>
                </div>
              </div>
              <p
                v-if="totalTime"
                class="mt-1 text-sm text-gray-500"
              >
                Итого отработано: {{ totalTime }}
              </p>
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
            type="submit"
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
import BaseInput from '../components/form/BaseInput.vue';
import { XCircleIcon } from '@heroicons/vue/solid';
import { createReport } from '../firebase';

export default {
  components: { BaseInput, XCircleIcon },
  computed: {
    timeData() {
      return this.time.arrival && this.time.departure ? true : false;
    },
    dataError() {
      return this.timeData && this.time.arrival > this.time.departure
        ? true
        : false;
    },
    totalTime() {
      if (this.timeData && !this.dataError) {
        const arrivalMs = Date.parse(this.time.arrival);
        const departureMs = Date.parse(this.time.departure);
        const repairMs = this.time.repair * 60000;
        const durationMs = departureMs - arrivalMs - repairMs;

        let hours = parseInt(durationMs / (1000 * 60 * 60));
        let mins = parseInt((durationMs / (1000 * 60)) % 60);

        hours = hours < 10 ? '0' + hours : hours;
        mins = mins < 10 ? '0' + mins : mins;

        return `${hours}:${mins}`;
      }
      return false;
    },
    fieldsWithTime() {
      return [
        {
          name: 'arrival',
          type: 'datetime-local',
          label: 'Время прибытия',
          required: true,
          // defaultValue: localDateTime().slice(0, 11) + '00:00',
        },
        {
          name: 'departure',
          type: 'datetime-local',
          label: 'Время убытия',
          required: true,
          // defaultValue: localDateTime().slice(0, 11) + '00:00',
        },
        {
          name: 'repair',
          type: 'number',
          label: 'Время ремонта, мин.',
          required: false,
          // defaultValue: bearFormData?.repairTime || '',
          minValue: 0,
        },
      ];
    },
  },
  data() {
    return {
      fieldsWithNames: [
        {
          type: 'text',
          label: 'Фамилия',
          required: false,
          name: 'surname',
        },
        {
          type: 'text',
          label: 'Имя',
          required: false,
          name: 'name',
        },
        {
          type: 'text',
          label: 'Отчество',
          required: false,
          name: 'patronymic',
        },
      ],

      customer: {
        surname: '',
        name: '',
        patronymic: '',
      },
      driver: {
        surname: '',
        name: '',
        patronymic: '',
      },
      employee: {
        surname: '',
        name: '',
        patronymic: '',
      },
      object: '',
      car: '',
      comment: '',
      time: {
        arrival: '',
        departure: '',
        repair: '',
      },

      alertMessage: '',
    };
  },
  methods: {
    submitData() {
      const formData = {
        customer: this.customer,
        driver: this.driver,
        employee: this.employee,
        object: this.object,
        car: this.car,
        comment: this.comment,
        time: this.time,
        totalTime: this.totalTime,
      };
      createReport(formData)
        .then((res) => {
          this.alertMessage = res.message;
          this.$router.push('/')
        })
        .catch((err) => (this.alertMessage = err.message));
      // todo: Если успех, выводим сообщение об успехе и переходим на главную. Иначе - сообщение Ошибка на сервере, попробуйте позже
    },
  },
};
</script>

<style lang="scss" scoped></style>
