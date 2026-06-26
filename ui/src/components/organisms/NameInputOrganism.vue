<script setup lang="ts">
import NameInputFormMolecule from "@/components/molecules/NameInputFormMolecule.vue";

</script>

<template>
  <div class="top">
    <h1 id="headline">SkyZ Playground</h1>
  </div>
  <div class="content">
    <NameInputFormMolecule></NameInputFormMolecule>
  </div>
</template>

<style scoped>
.top {
  #headline {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-size: 2.6rem;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 10px;
    background: linear-gradient(135deg, #ff416c 30%, #ff4b2b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 8px rgba(255, 75, 43, 0.3));
    animation: fadeIn 1s ease-out;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>
