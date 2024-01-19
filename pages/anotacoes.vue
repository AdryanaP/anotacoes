<template>
  <div class="p-4 flex justify-between fixed top-0 left-0 right-0 bg-gray-100">
    <h1 class="font-bold text-xl text-gray-700">Anotações</h1>
    <button>X</button>
  </div>
  <div class="pt-16 flex flex-col gap-3">
    <div
      v-for="annotation in annotations"
      :key="annotation.id"
      class="flex gap-3 items-center bg-white rounded-lg mx-4 p-2"
    >
      <img src="@/assets/images/grampo.png" alt="" class="h-5" />
      <div>
        <p class="underline">{{ annotation.title }}</p>
        <p class="text-xs text-gray-400">{{ annotation.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annotations: [
        {
          id: 1,
          title: "Ligar pra fulano",
          annotation: "tel: 21 971484578, amanhâ 21h",
          date: "21/12/2024 - 22:45h",
        },
        {
          id: 1,
          title: "Ligar pra fulano",
          annotation: "tel: 21 971484578, amanhâ 21h",
          date: "21/12/2024 - 22:45h",
        },
        {
          id: 1,
          title: "Ligar pra fulano",
          annotation: "tel: 21 971484578, amanhâ 21h",
          date: "21/12/2024 - 22:45h",
        },
      ],
    };
  },
};
</script>

<style></style>
