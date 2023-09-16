<template>
    <router-link to="/images">Images</router-link>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import ImageList from '../components/ImageList.vue';

    @Options({
        components: {
            ImageList,
        },
    })
    export default class Home extends Vue {}
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