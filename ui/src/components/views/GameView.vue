<script setup lang="ts">
import {useUserStore} from "@/stores/user.ts";
import {onMounted} from "vue";
import NavbarOrganism from "@/components/organisms/NavbarOrganism.vue";
import WelcomeSearchOrganism from "@/components/organisms/WelcomeSearchOrganism.vue";
import CardGridOrganism from "@/components/organisms/CardGridOrganism.vue";

const userStore = useUserStore()

onMounted(() => {
  userStore.setUsername(localStorage.getItem('username') as string)
})
</script>

<template>
  <div class="container">
    <div class="top">
      <NavbarOrganism></NavbarOrganism>
    </div>
    <WelcomeSearchOrganism :username="userStore.username"></WelcomeSearchOrganism>
    <div class="content">
      <CardGridOrganism></CardGridOrganism>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .top {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #252525;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .content {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding: 2rem;
  }
}

@media (max-width: 900px) {
  .content {
    padding: 1rem;
  }
}
</style>
