<script setup lang="ts">
import StartSiteOrganism from "@/components/organisms/truthOrDare/StartSiteOrganism.vue";
import PlayerNameSiteOrganism from "@/components/organisms/truthOrDare/PlayerNameSiteOrganism.vue";
import {ref} from "vue";
import GameSite from "@/components/organisms/truthOrDare/GameSite.vue";

const playerNames = ref(false)
const game = ref(false)

const startPlayerNames = () => {
  playerNames.value = true
}

const startGame = () => {
  game.value = true
}
</script>

<template>
  <StartSiteOrganism v-if="!playerNames" @playerName="startPlayerNames"></StartSiteOrganism>
  <PlayerNameSiteOrganism v-else-if="playerNames && !game" @startGame="startGame"></PlayerNameSiteOrganism>
  <GameSite v-else-if="game"></GameSite>
</template>

<style scoped>
</style>
