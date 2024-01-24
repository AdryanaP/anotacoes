<template>
  <div class="fixed top-0 right-0 m-4">
    <div
      :class="[
        success
          ? 'bg-green-100 border-green-500 text-green-900'
          : 'bg-red-100 border-red-500 text-red-500',
        'border-t-4 rounded-b px-4 py-3 shadow-md w-full',
      ]"
      role="alert"
    >
      <div class="flex items-center">
        <div class="py-1">
          <font-awesome-icon
            v-if="success"
            icon="circle-check"
            size="xl"
            class="text-green-500 mr-4"
          />
          <font-awesome-icon
            v-else
            icon="circle-xmark"
            size="xl"
            class="text-red-500 mr-4"
          />
        </div>
        <div>
          <p class="font-semibold">{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["success", "message"],
};
</script>

<style></style>
