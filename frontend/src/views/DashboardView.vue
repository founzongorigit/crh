<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const router = useRouter()
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const handleLogout = async () => {
  try {
    await authStore.logout()
    await router.push({ name: 'Login' })
  } catch {
    // L'erreur est déjà renseignée dans le store
  }
}
</script>

<template>
  <div>
    <h1>Welcome to the Dashboard</h1>
    <p>Welcome {{ user?.nom }} {{ user?.prenom }}</p>
    <button type="button" @click="handleLogout">Déconnexion</button>
  </div>
</template>

<style scoped>
</style>