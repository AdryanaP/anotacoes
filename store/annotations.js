export const useAnnotationsStore = defineStore({
  id: "annotations-store",
  state: () => {
    return {
      annotations: []
    };
  },

  persist: {
    storage: persistedState.localStorage,
  },

  actions: {
    addAnnotation(
      id,
      title,
      note,
      profit,
      categories,
      reminder,
      created
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

    deleteAnnotation(index) {
      this.annotations.splice(index, 1);
    },
  },

  getters: {
    getAnnotationByTitle: (state) => {
      return (title) =>
        state.annotations.find((annotation) => annotation.title === title);
    },
    getAnnotationbyId: (state) => {
      return (id) =>
        state.annotations.find((annotation) => annotation.id === id);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAnnotationsStore, import.meta.hot));
}
