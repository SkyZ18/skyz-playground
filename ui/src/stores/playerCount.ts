import {defineStore} from "pinia";
import {ref} from "vue";

export const usePlayerCountStore = defineStore('playerCount', () => {
    const gameString = ref('')
    const playerCount = ref(1)

    const setPlayerCount = (count: number) => {
        playerCount.value = count
    }

    const setGameString = (name: string) => {
        gameString.value = name
    }

    return { gameString, playerCount, setPlayerCount, setGameString }
})
