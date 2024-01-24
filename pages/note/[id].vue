<template>
  <div class="lg:w-[74%] pr-2 lg:absolute right-0">
    <h1 class="p-4 font-bold text-xl text-gray-700">Anotação Tal</h1>
    <div class="mx-4">
      <textarea
        id="note"
        name="note"
        v-model="annotation.note"
        required=""
        rows="14"
        class="block w-full appearance-none rounded-lg border-2 border-transparent p-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
      >
      </textarea>

      <div class="mt-4 grid grid-cols-badge gap-2">
        <div
          v-for="(category, i) in annotation.categories"
          :key="i"
          class="bg-sky-500 p-2 rounded-lg w-fit"
        >
          <p class="text-white font-bold">{{ category }}</p>
        </div>
      </div>

      <div class="my-4 flex gap-3 items-center">
        <p>Lembrete:</p>
        <font-awesome-icon
          icon="calendar-check"
          size="lg"
          class="text-sky-500"
        />
        <p>
          {{
            annotation.reminder
              ? annotation.reminder.toLocaleDateString()
              : "Não há lembrete definido"
          }}
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
        note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profit: null,
        categories: [],
        reminder: null,
      },
    };
  },

  created() {
    const route = useRoute();

    const id = Number(route.params.id);

    const annotationsStore = useAnnotationsStore();

    this.annotation = annotationsStore.getAnnotationbyId(id);
  },
};
</script>

<style></style>
