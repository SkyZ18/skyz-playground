<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

const goToGames = () => {
  router.push('/games')
}
</script>

<template>
  <div class="container">
    <div class="top">
      <h1 id="headline">SkyZ Playground</h1>
    </div>
    <div class="content">
      <p>Diese Seite wird eine ansammlung an spielen, dazu gehören Minispiele aller art. Für den Start, klicke auf den Knopf um einen Witz zu hören.</p>
      <button id="startBtn" @click="goToGames">START</button>
    </div>
    <div class="end">
      <p>Made by SkyZ aka. Max Fuhrmann</p>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
}

#headline {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 3.5rem;
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

.content {
  align-content: center;
}

.end {
  position: absolute;
  bottom: 0;
}

#startBtn {
  margin-top: 4rem;
  padding: 20px 60px;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
  box-shadow: 0 4px 15px rgba(255, 75, 43, 0.4);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
}

#startBtn:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 8px 25px rgba(255, 75, 43, 0.6);
  background: linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%);
}

#startBtn:active {
  transform: translateY(-1px) scale(0.98);
  box-shadow: 0 2px 10px rgba(255, 75, 43, 0.4);
}
</style>
