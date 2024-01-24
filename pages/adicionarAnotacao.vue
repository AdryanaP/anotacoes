<template>
  <div class="lg:w-[74%] pr-2 lg:absolute right-0 bg-gray-100">
    <div class="p-4 flex justify-between">
      <h1 class="font-bold text-xl text-gray-700">Criar anotação</h1>
      <NuxtLink to="/">
        <button>
          <font-awesome-icon icon="xmark" size="xl" style="color: #c2c2c2" />
        </button>
      </NuxtLink>
    </div>

    <div>
      <form>
        <div class="mx-4">
          <textarea
            id="note"
            name="note"
            v-model="annotation.note"
            required=""
            rows="6"
            class="block w-full appearance-none rounded-lg border-2 border-transparent p-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
          >
          </textarea>
        </div>

        <div>
          <label
            for="title"
            class="m-4 block text-sm font-medium text-gray-700 text-start"
            >Título
            <span class="text-red-500">*</span>
          </label>

          <div class="mx-4">
            <input
              id="title"
              name="title"
              v-model="annotation.title"
              type="text"
              required=""
              class="block w-full appearance-none rounded-lg border-2 border-transparent p-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            for="profit"
            class="m-4 block text-sm font-medium text-gray-700 text-start"
            >Pontencial do negócio</label
          >
          <div class="mx-4">
            <input
              id="profit"
              name="profit"
              v-model.lazy="annotation.profit"
              v-money3="config"
              required=""
              class="block w-full appearance-none rounded-lg border-2 border-transparent p-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            for="category"
            class="m-4 block text-sm font-medium text-gray-700 text-start"
            >Categorização</label
          >

          <div class="mx-4">
            <Multiselect
              id="category"
              name="category"
              mode="tags"
              :searchable="true"
              :create-option="true"
              v-model="annotation.categories"
              :options="options"
              required=""
              class="block w-full appearance-none rounded-lg border-2 border-transparent p-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            >
            </Multiselect>
          </div>
        </div>
        <div>
          <label
            for="reminder"
            class="m-4 block text-sm font-medium text-gray-700 text-start"
            >Lembrete</label
          >
          <div class="mx-4">
            <input
              id="reminder"
              name="reminder"
              type="text"
              v-model="annotation.reminder"
              required=""
              placeholder="Selecione uma data"
              onfocus="(this.type='date')"
              class="block w-full appearance-none rounded-lg border-2 border-transparent p-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>

    <div class="p-4 mt-8 flex justify-between lg:justify-end gap-4">
      <NuxtLink to="/">
        <ButtonSecondary>
          <font-awesome-icon icon="trash-can" style="color: #ffffff" />
        </ButtonSecondary>
      </NuxtLink>
      <ButtonPrimary class="w-full lg:w-52" @click="checkFiels"
        >Salvar</ButtonPrimary
      >
    </div>
    <Alert v-show="alertOpen" :success="success" :message="message" />
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import { Money3Directive } from "v-money3";
import { storeToRefs } from "pinia";

definePageMeta({
  layout: "default",
});

export default {
  components: { Multiselect },
  data() {
    return {
      selected: ["important"],
      success: false,
      message: "",
      alertOpen: false,
      options: ["Importante", "Urgente", "Atrasado"],
      annotations: [],
      annotation: {
        id: 1,
        title: null,
        note: null,
        profit: null,
        categories: [],
        reminder: null,
        created: new Date(),
      },
      config: {
        prefix: "R$ ",
        suffix: "",
        thousands: ".",
        decimal: ",",
        precision: 2,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
        shouldRound: true,
        focusOnRight: false,
      },
    };
  },
  directives: { money3: Money3Directive },

  methods: {
    checkFiels() {
      if (this.annotation.note <= 2) {
        this.success = false;
        this.message = "Obrigatório preencher nota";
        this.alertOpen = true;
      } else if (this.annotation.title <= 0) {
        this.success = false;
        this.message = "Obrigatório preencher título";
        this.alertOpen = true;
      } else {
        this.alertOpen = false;
        this.addAnnotation();
      }

      setTimeout(() => {
        this.alertOpen = false;
      }, 3000);
    },

    addAnnotation() {
      const annotationsStore = useAnnotationsStore();

      annotationsStore.addAnnotation(
        this.annotation.id,
        this.annotation.title,
        this.annotation.note,
        this.annotation.profit,
        this.annotation.categories,
        this.annotation.reminder,
        this.annotation.created
      );

      this.success = true;
      this.message = "Anotação criada com sucesso!";
      this.alertOpen = true;
      setTimeout(() => {
        this.alertOpen = false;
      }, 5000);

      navigateTo("/anotacoes");
    },
  },

  created() {
    const annotationsStore = useAnnotationsStore();
    const { annotations } = storeToRefs(annotationsStore);
    this.annotations = annotations;
    if (this.annotations.length >= 1) {
      const lastId = this.annotations.length - 1;
      this.annotation.id = this.annotations[lastId].id + 1;
    }
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style>
:root {
  --ms-border-color: border-transparent;
  --ms-border-width: 2px;
  --ms-border-color-active: #0ea5e9;
  --ms-border-width-active: 2px;
  --ms-radius: 0.5rem;
  --ms-py: 0.125rem;
  --ms-ring-width: 0px;

  --ms-tag-bg: #0ea5e9;

  --ms-dropdown-border-color: #0ea5e9;
  --ms-dropdown-border-width: 2px;
  --ms-dropdown-radius: 0.5rem;
}
</style>
