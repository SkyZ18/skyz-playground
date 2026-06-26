<script setup lang="ts">

const props = defineProps<{
  description: string
}>()

</script>

<template>
  <button class="info-btn">
    <span class="btn-text">Info</span>
    <div class="info-tooltip">
      {{props.description}}
    </div>
  </button>
</template>

<style scoped>
.info-btn {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 13px 16px;
  margin-top: 2rem;
  background-color: #1c1c1c;
  border: none;
  border-radius: 15px 15px 0 0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.info-btn:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.info-btn:active {
  background-color: rgba(0, 0, 0, 0.08);
}

.info-tooltip {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  width: 240px;
  background-color: rgba(30, 30, 30, 0.9);
  color: #ffffff;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  z-index: 10;
}

.info-btn:hover .info-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.info-tooltip::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px;
  border-style: solid;
  border-color: transparent transparent rgba(30, 30, 30, 0.9) transparent;
}
</style>
