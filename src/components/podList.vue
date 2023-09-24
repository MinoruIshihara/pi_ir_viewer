<template>
    <v-sheet
        class="d-flex justify-space-between align-stretch mb-6"
        height="400"
    >
        <div class="pod-list">
            <v-card class="mx-auto h-100" max-width="600" min-width="200">
                <v-toolbar color="secondary">
                    <v-btn variant="text" v-icon :icon="mdiMenu"></v-btn>
                    <v-toolbar-title><p style="text-align: left">Sources</p></v-toolbar-title>
                    <v-btn v-bind:icon="mdiMagnify"></v-btn>
                </v-toolbar>
                <v-list
                    @click:select="selectPod"
                    :items="pods"
                    item-title="id"
                    item-value="url"
                >
                </v-list>
            </v-card>
        </div>
        <div class="camera-image">
            <v-card class="mx-auto h-100">
                <v-card-title>
                    Camera:
                </v-card-title>
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    class="mx-auto"
                    height="300px"
                    width="300px"
                    cover>
                </v-img>
                <v-card-text>
                    最終更新: 
                </v-card-text>
            </v-card>
        </div>
        <div class="pod-stats">
            <v-card class="mx-auto h-100" max-width="600" min-width="200">
                <template v-slot:title>
                    Stats:
                </template>
            </v-card>
        </div>
    </v-sheet>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { mdiMenu, mdiMagnify, mdiCamera } from '@mdi/js';

type Pod = {
    id: number;
    url: string;
};

const selectedPod = ref("");

const props = defineProps({pods: {type: Array, required: true},});

const selectPod = (arg: any) => {
    selectedPod.value = arg.id;
    return
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .camera-image {
        flex-grow: 0.9
    }
</style>
