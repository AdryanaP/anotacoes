export const useAnnotationsStore = defineStore({
  id: "annotations-store",
  state: () => {
    return {
      annotations: [
        {
          id: 1,
          title: "Entrevista quinta",
          note: "Entrevista quinta às 15h no Centro",
          categories: ["importante"],
          reminder: new Date(),
          created: new Date(),
          profit: 12,
        },
        {
          id: 2,
          title: "Ligar pai",
          note: "Ligar pra pai 21 971484578",
          categories: ["urgente"],
          created: new Date(),
        },
      ],
    };
  },

  persist: {
    storage: persistedState.localStorage,
  },

  actions: {
    addAnnotation(
      id: number,
      title: string,
      note: string,
      profit: number,
      categories: Array<string>,
      reminder: Date,
      created: Date
    ) {
      this.annotations.push({
        id,
        title,
        note,
        categories,
        reminder,
        created,
        profit,
      });
    },

    deleteAnnotation(index: number) {
      this.annotations.splice(index, 1);
    },
  },

  getters: {
    getAnnotationByTitle: (state) => {
      return (title: string) =>
        state.annotations.find((annotation) => annotation.title === title);
    },
    getAnnotationbyId: (state) => {
      return (id: number) =>
        state.annotations.find((annotation) => annotation.id === id);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAnnotationsStore, import.meta.hot));
}
