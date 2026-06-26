<script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter()

const goToHome = () => {
  router.back()
}
</script>

<template>
  <div class="navbar">
    <div class="navbar-row">
      <button id="backBtn" @click="goToHome">↩︎</button>
      <h1 id="headline">SkyZ Playground</h1>
    </div>
  </div>
</template>

<style scoped>
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
}
</style>
