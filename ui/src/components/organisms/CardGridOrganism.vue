<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const gameCollection = new Map([
  ['truthOrDare', '/images/WahrheitOderPflicht.png'],
  ['impostor', '/images/Impostor.png'],
  ['wouldYouRather', '/images/WurdestDuEher.png'],
  ['princessTreatment', '/images/PrincessTreatment.png'],
])

const navToGame = (name: string) => {
  router.push("/games/" + name)
}

</script>

<template>
  <div class="card-grid">
    <div v-for="[name, picture] in gameCollection" :key="name" class="game-card" :style="{ backgroundImage: `url(${picture})` }" @click="navToGame(name)"></div>
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  width: 100%;
  max-width: 2000px;
}

.game-card {
  width: 100%;
  max-width: 600px;
  height: 390px;
  border: solid 2px white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 15px;
  justify-self: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  z-index: 1;
}

.game-card:hover,
.game-card:focus {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 15px 35px rgba(255, 75, 43, 0.4);
  z-index: 2;
}

.game-card:active {
  transform: translateY(-2px) scale(0.99);
  box-shadow: 0 5px 15px rgba(255, 75, 43, 0.3);
}

@media (max-width: 900px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .game-card {
    height: 220px;
    max-width: 100%;
  }
}
</style>
