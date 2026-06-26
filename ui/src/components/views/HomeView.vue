<script setup lang="ts">
import NameInputOrganism from "@/components/organisms/NameInputOrganism.vue";
import MainFooterOrganism from "@/components/organisms/MainFooterOrganism.vue";

</script>

<template>
  <div class="container">
    <NameInputOrganism></NameInputOrganism>
    <MainFooterOrganism></MainFooterOrganism>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
