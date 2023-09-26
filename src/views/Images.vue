<template>
    <div id="image-list-page" class="my-5 mx-3">
        <podList v-bind:pods="pods" :images="imageDetailList"/>
    </div>
</template>

<script setup lang="ts">
import podList from '../components/podList.vue';
import { Pod } from '../api/requests';
import { getImageList } from '../api/requests';
import { ImageDetail } from '../api/requests';
import { onMounted, ref } from 'vue';

const imageDetailList = ref<ImageDetail[]>([{id: "", name: "", created_at: "", file: ""}]);

onMounted(
    () => {
        getImageList()
        .then(
            (value)=>{imageDetailList.value=value;}
        )
    }
);

const pods: Array<Pod> = [{id: "1", name: "AAA"}, {id: "2", name: "BBB"}, {id: "3", name :"CCC"}]
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
