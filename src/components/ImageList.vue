<template>
    <div class="image-list">
        <ul>
            <li v-for="item in urlList" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'ImageList',
        data() {
            return {
                urlList: ["AAA", "BBB", "CCC"]
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
