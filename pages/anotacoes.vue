<template>
  <div class="lg:hidden">
    <div
      class="p-4 flex justify-between  bg-gray-100"
    >
      <h1 class="font-bold text-xl text-gray-700">Anotações</h1>
      <button>
        <font-awesome-icon icon="xmark" size="xl" style="color: #c2c2c2" />
      </button>
    </div>
    <Notes />
    <div class="p-4 fixed bottom-0 left-0 right-0">
      <ButtonPrimary class="w-full">
        <NuxtLink to="/adicionarAnotacao">
          <font-awesome-icon icon="plus" style="color: #ffffff" class="mr-1" />
          Criar anotação
        </NuxtLink>
      </ButtonPrimary>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
