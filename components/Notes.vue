<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="annotation, index in annotations"
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
          <p class="text-xs text-gray-400">
            {{ annotation.created.toLocaleString() }}
          </p>
        </div>
        <div class="flex justify-end w-full">
          <Modal :annotation-index="annotationSeleted">
            <font-awesome-icon icon="trash-can" style="color: #ff7a7a" @click="getIndex(index)"/>
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
      annotationSeleted: null
    };
  },

  methods: {
    getIndex(index) {
      this.annotationSeleted = index
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
