<script setup lang="ts">
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/user.ts";
import {ref} from "vue";

const router = useRouter()
const userStore = useUserStore()

const inputName = ref('')

const goToGames = () => {
  userStore.setUsername(inputName.value)
  router.push('/games')
}
</script>

<template>
  <div class="container">
    <div class="top">
      <h1 id="headline">SkyZ Playground</h1>
    </div>
    <div class="content">
      <input id="username" type="text" placeholder="Username" autocomplete="off" v-model="inputName" />
      <button id="startBtn" @click="goToGames">START</button>
    </div>
    <div class="footer">
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
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;

  .top {
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
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

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
      border-radius: 50px;
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
      margin-top: 2rem;
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

  .footer {
    display: flex;

    justify-content: center;
    bottom: 0;
  }
}
</style>
