<template>
  <v-app>
    <div id="nav">
      <v-app-bar color="primary">
        <template v-slot:prepend>
          <v-btn :icon="mdiHome" to="/"></v-btn>
        </template>
        
        <v-app-bar-title>
          Pi Camera Viewer
        </v-app-bar-title>
      </v-app-bar>
    </div>
    <router-view/>
  </v-app>
</template>

<script setup lang="ts">
import { mdiHome } from '@mdi/js'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
