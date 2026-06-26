<script setup lang="ts">
import {ref} from "vue";

const props = defineProps<{
  username: string
}>()

const inputSearch = ref('')
</script>

<template>
  <div class="welcome">
    <div id="username">Hallo {{props.username}}</div>
    <input id="gameSearch" type="text" placeholder="Suchen" autocomplete="off" v-model="inputSearch">
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 1rem;
  max-width: 1990px;
  width: 90%;
  align-self: center;

  #username {
    margin-left: 10px;
    font-size: 1.7rem;
    font-weight: 800;
    filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
    max-width: 2000px;
  }

  #gameSearch {
    margin-top: 1rem;
    max-width: 350px;
    padding: 14px 20px;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #1a1a1a;
    border: 2px solid #2a2a2a;
    border-radius: 15px;
    outline: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
  }
}
</style>
