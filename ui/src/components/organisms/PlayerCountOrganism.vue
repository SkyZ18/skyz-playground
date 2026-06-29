<script setup lang="ts">
import {onMounted, ref} from "vue";
import {usePlayerCountStore} from "@/stores/playerCount.ts";

const playerCountStore = usePlayerCountStore();

const playerCount = ref(2)
const maxPlayerCount = ref(0)
const minPlayerCount = ref(0)

const increasePlayer = () => {
  if(playerCount.value < maxPlayerCount.value) {
    playerCount.value++
    emit('sendPlayerCount', playerCount.value)
  }
}

const decreasePlayer = () => {
  if(playerCount.value != minPlayerCount.value) {
    playerCount.value--
    emit('sendPlayerCount', playerCount.value)
  }
}

onMounted(() => {
  switch(playerCountStore.gameString) {
    case "Wahrheit o. Pflicht": {
      maxPlayerCount.value = 4
      minPlayerCount.value = 2
      playerCount.value = minPlayerCount.value
    }
  }
  emit("sendPlayerCount", playerCount.value)
})

const emit = defineEmits(['sendPlayerCount'])
</script>

<template>
  <div class="playerCount">
    <p>Spieleranzahl</p>
    <button @click="decreasePlayer">-</button>
    <div>{{ playerCount }}</div>
    <button @click="increasePlayer">+</button>
  </div>
</template>

<style scoped>
.playerCount {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 44px;
  background-color: #1c1c1c;
  border: none;
  border-radius: 0 0 15px 15px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.8rem;
    margin: 0 10px 0 0;
    cursor: pointer;
  }

  button:hover {
    color: #0071e3;
  }

  p {
    margin-left: 15px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
