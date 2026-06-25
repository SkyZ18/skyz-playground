<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.ts";
import {onMounted, ref} from "vue";

const router = useRouter()
const userStore = useUserStore()

const inputSearch = ref('')

const goToHome = () => {
  router.push('/')
}

const gameCollection = new Map([
  ['Wahrheit o Pflicht', '/images/WahrheitOderPflicht.png'],
  ['Impostor', '/images/Impostor.png'],
  ['Würdest du eher', '/images/WurdestDuEher.png'],
  ['Princess Treatment', '/images/PrincessTreatment.png'],
])

onMounted(() => {
  userStore.setUsername(localStorage.getItem('username') as string)
})
</script>

<template>
  <div class="container">
    <div class="top">
      <div class="navbar">
        <div class="navbar-row">
          <button id="backBtn" @click="goToHome">↩︎</button>
          <h1 id="headline">SkyZ Playground</h1>
        </div>
      </div>
    </div>
    <div class="welcome">
      <div id="username">Hallo {{userStore.username}}</div>
      <input id="gameSearch" type="text" placeholder="Suchen" autocomplete="off" v-model="inputSearch">
    </div>
    <div class="content">
      <div class="card-grid">
        <div v-for="[name, picture] in gameCollection" :key="name" class="game-card" :style="{ backgroundImage: `url(${picture})` }"></div>
      </div>
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
  height: 100%;

  .top {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #252525;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    padding: 1rem;
    max-width: 1990px;
    width: 90%;
    align-self: center;

    #username {
      margin-left: 10px;
      font-size: 1.7rem;
      font-weight: 800;
      filter: drop-shadow(0 2px 8px rgba(255, 75, 43, 0.3));
      animation: fadeIn 1s ease-out forwards;
      max-width: 2000px;
    }

    #gameSearch {
      margin-top: 1rem;
      max-width: 350px;
      padding: 14px 20px;
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
  }

  .content {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding: 2rem;

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
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.2rem solid #393939;
    height: 80px;
    padding: 0 1rem;
    overflow: hidden;

    .navbar-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
      padding-left: 1rem;
    }

    #headline {
      font-weight: 900;
      font-style: italic;
      text-transform: uppercase;
      background: linear-gradient(135deg, #ff416c 30%, #ff4b2b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 2px 8px rgba(255, 75, 43, 0.3));
      transform-origin: left center;
      transition: transform 0.1s linear;
      animation: fadeIn 1s ease-out forwards;
    }

    #backBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 8px;
      line-height: 1;
      width: 45px;
      height: 45px;
      font-size: 2rem;
      font-weight: 800;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
      box-shadow: 0 4px 15px rgba(255, 75, 43, 0.4);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      position: relative;
    }

    #backBtn:hover {
      box-shadow: 0 8px 25px rgba(255, 75, 43, 0.6);
      background: linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%);
    }

    #backBtn:active {
      transform: translateY(-1px) scale(0.98);
      box-shadow: 0 2px 10px rgba(255, 75, 43, 0.4);
    }
  }
}

@media (max-width: 900px) {
  .container {
    .navbar {
      flex-direction: column;
      height: auto;
      gap: 1rem;

      #headline {
        font-size: 1.8rem;
        transform-origin: center center;
      }
    }

    .navbar-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 1rem;
    }

    .content {
      padding: 1rem;

      .card-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .game-card {
        height: 220px;
        max-width: 100%;
      }
    }
  }
}
</style>
