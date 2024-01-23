<template>
  <button @click="toggleModal">
    <slot />
  </button>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="toggleModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-3xl transform overflow-hidden rounded-lg bg-white text-left align-middle py-4 md:py-8 shadow-xl transition-all"
            >
              <div class="px-4 md:px-8 flex justify-between items-center mb-4">
                <DialogTitle
                  as="h3"
                  class="text-xl md:text-2xl font-medium leading-6 text-gray-900"
                >
                  Deletar anotação
                </DialogTitle>
                <button type="button" @click="toggleModal">
                  <font-awesome-icon
                    icon="xmark"
                    size="xl"
                    style="color: #c2c2c2"
                  />
                </button>
              </div>
              <hr />
              <div class="mt-4 px-4 md:px-8">
                <p class="text-gray-500 md:text-lg">
                  Você está prestes a deletar uma anotação e esta ação não
                  poderá ser desfeita.
                </p>
                <p class="text-gray-500 md:text-lg">
                  Tem certeza que deseja continuar?
                </p>
              </div>

              <div
                class="mt-8 md:mt-12 flex gap-2 px-4 md:px-8 justify-between md:justify-end"
              >
                <button
                  type="button"
                  class="py-3 px-5 border rounded-full"
                  @click="toggleModal"
                >
                  Cancelar
                </button>
                <ButtonSecondary @click="toggleModal">
                  Deletar
                </ButtonSecondary>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
