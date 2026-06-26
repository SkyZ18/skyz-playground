<script setup lang="ts">
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/user.ts";
import {ref} from "vue";
import UsernameErrorMessageAtom from "@/components/atoms/UsernameErrorMessageAtom.vue";

const router = useRouter()
const userStore = useUserStore()

const inputName = ref('')
const showInputWarning = ref(false);

const goToGames = () => {
  userStore.setUsername(inputName.value)
  localStorage.setItem("username", inputName.value)
  router.push('/games')
}

const checkLength = () => {
  showInputWarning.value = inputName.value.length >= 15;
}
</script>

<template>
  <input id="username" type="text" placeholder="Username" autocomplete="off" v-model="inputName" :maxlength="15" @input="checkLength">
  <UsernameErrorMessageAtom :showInputWarning="showInputWarning"></UsernameErrorMessageAtom>
  <button id="startBtn" @click="goToGames" :disabled="inputName.length === 0 || inputName.length >= 15">START</button>
</template>

<style scoped>
#username {
  width: 50%;
  margin-top: 4rem;
  padding: 16px 24px;
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

#username::placeholder {
  color: #666666;
  font-weight: 500;
  font-style: italic;
}

#username:focus {
  background-color: #121212;
  border-color: #ff4b2b;
  box-shadow: 0 0 15px rgba(255, 75, 43, 0.4),
  inset 0 2px 4px rgba(0, 0, 0, 0.5);
  transform: scale(1.01);
}

#username:hover:not(:focus) {
  border-color: #444444;
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

#startBtn:disabled {
  background: #333333;
  color: #666666;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
  opacity: 0.6;
}

#startBtn:hover:not(:disabled) {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 8px 25px rgba(255, 75, 43, 0.6);
  background: linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%);
}
</style>
