<template>
    <div class="pod-list">
        <v-card class="mx-auto" max-width="600">
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
</template>

<script lang="ts">
import { mdiMenu, mdiMagnify, mdiCamera } from '@mdi/js'
    export type Pod = {
        id: number,
        url: string,
    }
    export default {
        name: 'podList',
        data: () => ({
            mdiMenu,
            mdiMagnify,
            mdiCamera,
            selectedPod: "" as string,
        }),
        computed: {
            
        }
        props:{
            pods: {
                type: Array,
                required: true,
                default: () => []
            }
        },
        methods: {
            selectPod(arg: any) :void{
                this.selectedPod = arg.url;
                return
            },
        }
    }
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
</style>
