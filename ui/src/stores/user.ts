import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const username = ref('')
  const playerList = ref([] as string[])

  function setUsername(newName: string) {
    if( newName !== '' ){
      username.value = newName.trim()
    }
  }

  function setGameUserList(addNewName: string) {
    playerList.value.push(addNewName.trim())
  }

  return { username, setUsername, setGameUserList }
})
