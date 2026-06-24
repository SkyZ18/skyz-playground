import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const username = ref('')

  function setUsername(newName: string) {
    if( newName !== '' ){
      username.value = newName.trim()
    }
  }

  return { username, setUsername }
})
