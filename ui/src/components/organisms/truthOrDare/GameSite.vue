<script setup lang="ts">

import NavbarOrganism from "@/components/organisms/NavbarOrganism.vue";
</script>

<template>
  <div class="container">
    <div class="top">
      <NavbarOrganism></NavbarOrganism>
    </div>
    <div class="content">
      <button id="Truth">Wahrheit</button>
      <button id="Dare">Pflicht</button>
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
    min-height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 2rem;

    button {
      width: 100%;
      min-height: 50%;
      margin-top: 4rem;
      padding: 18px 85px;
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: 2px;
      color: #ffffff;
      text-transform: uppercase;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      background: #0071e3;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    button:hover {
      transform: translateY(-4px) scale(1.03);
    }

    button:active {
      transform: translateY(-1px) scale(0.98);
    }
  }
}

@media (max-width: 900px) {
  .content {
    padding: 1rem;
  }
}
</style>
