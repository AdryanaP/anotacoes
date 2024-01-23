<template>
  <div class="m-4 lg:hidden flex justify-between fixed top-0 left-0 right-0">
    <h1 class="font-bold text-xl text-gray-700">Anotações</h1>
    <button>
      <font-awesome-icon icon="xmark" size="xl" style="color: #c2c2c2" />
    </button>
  </div>

  <div class="lg:w-[74%] pr-2 lg:absolute right-0 flex flex-col items-center justify-center gap-8 h-screen">
    <Logo />
    <ButtonPrimary>
      <NuxtLink to="/adicionarAnotacao">
        <font-awesome-icon icon="plus" style="color: #ffffff" class="mr-1" />
        Criar anotação
      </NuxtLink>
    </ButtonPrimary>
  </div>
</template>

<script>
definePageMeta({
  layout: "default",
});
export default {};
</script>
