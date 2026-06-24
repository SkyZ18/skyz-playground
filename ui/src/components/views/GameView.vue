<script setup lang="ts">
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/user.ts";

const router = useRouter()
const userStore = useUserStore()

const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="container">
    <div id="showName">Hallo, {{ userStore.username }}!</div>
    <button id="backBtn" @click="goToHome">ZURÜCK</button>
  </div>
</template>

<style scoped>
img {
  height: auto;
  width: 100%;
  max-width: 1000px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
}

#backBtn {
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

#backBtn:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 8px 25px rgba(255, 75, 43, 0.6);
  background: linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%);
}

#backBtn:active {
  transform: translateY(-1px) scale(0.98);
  box-shadow: 0 2px 10px rgba(255, 75, 43, 0.4);
}
</style>
