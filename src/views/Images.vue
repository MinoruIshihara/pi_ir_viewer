<template>
    <div class="image-list-page">
        <h1>Images</h1>
        <ImageList></ImageList>
    </div>
</template>
  
<script lang="ts">
    import ImageList from '../components/ImageList.vue'
    export default {
        name: 'Images',
        components: {
            ImageList
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
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
