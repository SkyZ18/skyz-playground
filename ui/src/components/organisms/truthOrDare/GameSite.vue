<script setup lang="ts">

import NavbarOrganism from "@/components/organisms/NavbarOrganism.vue";
</script>

<template>
  <div class="container">
    <div class="top">
      <NavbarOrganism></NavbarOrganism>
    </div>
    <div class="content">
      <button id="truth">Wahrheit</button>
      <button id="dare">Pflicht</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;

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
    justify-items: center;
    align-items: center;
    align-content: center;
    gap: 1.5rem;
    max-height: 100vh;
    min-height: 75vh;
    padding: 1rem;

    button {
      width: 100%;
      min-height: 210px;
      font-size: 2rem;
      font-style: italic;
      font-weight: 800;
      letter-spacing: 2px;
      color: #ffffff;
      text-transform: uppercase;
      border: solid 2px white;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    #truth {
      background: linear-gradient(135deg, #0044ff 0%, #0077ff 50%, #00d4ff 100%);
      box-shadow: 0 4px 15px rgba(67, 100, 247, 0.4);
    }

    #dare {
      background: linear-gradient(135deg, #ff003c 0%, #ff5500 50%, #ffaa00 100%);
      box-shadow: 0 5px 15px rgba(255, 0, 60, 0.35);
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
    flex-direction: column;
  }
}
</style>
