<script setup lang="ts">

const props = defineProps<{
  showInputWarning: boolean;
}>()

</script>

<template>
  <transition name="slide-fade">
          <span v-if="props.showInputWarning" class="limit-warning">
            Maximale Länge von 15 Zeichen erreicht!
          </span>
  </transition>
</template>

<style scoped>
.limit-warning {
  position: absolute;
  margin-top: 8rem;
  padding: 10px 10px;
  max-width: 330px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 8px;
  background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
  box-shadow: 0 4px 15px rgba(255, 75, 43, 0.4);
  animation: fadeIn 0.3s ease-out;
  text-align: center;
}
</style>
