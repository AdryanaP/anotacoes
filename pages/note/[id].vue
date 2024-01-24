<template>
  <div class="lg:w-[74%] pr-2 lg:absolute right-0">
    <div class="p-4 flex justify-between bg-gray-100">
      <h1 class="font-bold text-xl text-gray-700">
        Anotação {{ annotation.title }}
      </h1>
      <NuxtLink to="/">
        <button>
          <font-awesome-icon icon="xmark" size="xl" style="color: #c2c2c2" />
        </button>
      </NuxtLink>
    </div>
    <div class="mx-4">
      <textarea
        id="note"
        name="note"
        v-model="annotation.note"
        rows="14"
        readonly
        class="block w-full appearance-none rounded-lg border-2 border-transparent p-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
      >
      </textarea>

      <div class="mt-4 flex overflow-x-scroll gap-2">
        <div
          v-for="(category, i) in annotation.categories"
          :key="i"
          class="bg-sky-500 p-2 rounded-lg w-fit mb-1"
        >
          <p class="text-white font-bold">{{ category }}</p>
        </div>
      </div>

      <div class="my-4 flex gap-3 items-center">
        <p class="font-semibold">Lembrete:</p>
        <font-awesome-icon
          icon="calendar-check"
          size="lg"
          class="text-sky-500"
        />
        <p>
          {{
            annotation.reminder
              ? formatDate(annotation.reminder)
              : "Não há lembrete definido"
          }}
        </p>
      </div>

      <div class="my-4 flex gap-3 items-center">
        <p class="font-semibold">Profit:</p>

        <font-awesome-icon
          :icon="['fas', 'hand-holding-dollar']"
          size="lg"
          class="text-sky-500"
        />
        <p>
          {{ annotation.profit }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annotation: {
        title: "",
        note: "",
        profit: null,
        categories: [],
        reminder: null,
      },
    };
  },

  methods: {
    padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    },

    formatDate(created) {
      const date = new Date(created);
      return [
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
        date.getFullYear(),
      ].join("/");
    },
  },

  mounted() {
    const route = useRoute();

    const id = Number(route.params.id);

    const annotationsStore = useAnnotationsStore();

    this.annotation = annotationsStore.getAnnotationbyId(id);
  },
};
</script>

<style></style>
