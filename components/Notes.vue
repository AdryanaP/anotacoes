<template>
  <div class="flex flex-col gap-3 overflow-y-scroll lg:h-[80%] h-[22rem] mb-4">
    <div
      v-for="(annotation, index) in annotations"
      :key="annotation.id"
      class="flex gap-3 items-center justify-between bg-white rounded-lg mx-4 p-2"
    >
      <div class="flex items-center justify-stretch gap-3 w-full">
        <img src="@/assets/images/grampo.png" alt="" class="h-5" />
        <div class="w-[70%]">
          <NuxtLink :to="'/note/' + annotation.id">
            <p
              class="underline text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {{ annotation.title }}
            </p>
          </NuxtLink>
          <p class="text-[10px] text-gray-400">
            {{ formatDate(annotation.created) }}
          </p>
        </div>
        <div class="flex justify-end w-full">
          <Modal :annotation-index="annotationSeleted">
            <font-awesome-icon
              icon="trash-can"
              style="color: #ff7a7a"
              @click="getIndex(index)"
            />
          </Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";

export default {
  data() {
    return {
      annotations: [],
      annotationSeleted: null,
    };
  },

  methods: {
    getIndex(index) {
      this.annotationSeleted = index;
    },

    padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    },

    formatDate(created) {
      const date = new Date(created)
      return (
        [
          this.padTo2Digits(date.getMonth() + 1),
          this.padTo2Digits(date.getDate()),
          date.getFullYear(),
        ].join("/") +
        " " +
        [
          this.padTo2Digits(date.getHours()),
          this.padTo2Digits(date.getMinutes()),
          this.padTo2Digits(date.getSeconds()),
        ].join(":")
      );
    },
  },

  created() {
    const annotationsStore = useAnnotationsStore();
    const { annotations } = storeToRefs(annotationsStore);
    this.annotations = annotations;
  },
};
</script>

<style></style>
