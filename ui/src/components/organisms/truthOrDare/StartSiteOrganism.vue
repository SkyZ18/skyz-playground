<script setup lang="ts">
import PlayerCountOrganism from "@/components/organisms/PlayerCountOrganism.vue";
import NavbarOrganism from "@/components/organisms/NavbarOrganism.vue";
import InfoButtonOrganism from "@/components/organisms/InfoButtonOrganism.vue";
import {onMounted, ref} from "vue";
import {usePlayerCountStore} from "@/stores/playerCount.ts";

const playerCountStore = usePlayerCountStore();
const emit = defineEmits(['playerName'])

const name = 'Wahrheit o. Pflicht'
const description = 'Traust du dich? Ein Spieler bekommt die Möglichkeit Wahrheit oder Pflicht zu wählen. ' +
    'Nach der Auswahl wird eine Aufgabe gestellt. Sollte der Spieler die Aufgabe nicht durchführen wollen, so kann diese übersprungen werden. ' +
    'Dafür bekommt er aber keine Punkte. Viel Spaß!'

const playerCount = ref(1)

const getCount = (count: number) => {
  playerCount.value = count
}

onMounted(() => {
  playerCountStore.setGameString(name)
})
</script>

<template>
  <div class="container">
    <div class="top">
      <NavbarOrganism></NavbarOrganism>
    </div>
    <div class="content">
      <div id="headline">Wahrheit <br> o. Pflicht</div>
      <InfoButtonOrganism :description="description"></InfoButtonOrganism>
      <PlayerCountOrganism @sendPlayerCount="getCount"></PlayerCountOrganism>
      <button id="startBtn" @click="playerCountStore.setPlayerCount(--playerCount); emit('playerName')">Start</button>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 2rem;

    #headline {
      margin-left: 10px;
      font-size: 3rem;
      font-weight: 800;
      filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
      max-width: 2000px;
    }

    #startBtn {
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
      background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
      box-shadow: 0 4px 15px rgba(255, 75, 43, 0.4);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
  }
}

@media (max-width: 900px) {
  .content {
    padding: 1rem;
  }
}
</style>
