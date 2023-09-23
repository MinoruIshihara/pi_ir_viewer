<template>
    <div class="image-list-page">
        <h1>Images</h1>
        <podList v-bind:pods="pods"/>
    </div>
</template>
  
<script lang="ts">
    import podList from '../components/podList.vue'
    import {Pod} from '../components/podList.vue'

    export default {
        name: 'Images',
        components: {
            podList
        },
        data() {
            return {
                pods: [{id: 1, url: "AAA"}, {id: 2, url: "BBB"}, {id: 3, url :"CCC"}] as Pod[]
            };
        },
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
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
