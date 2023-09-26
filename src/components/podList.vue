<template>
    <v-sheet
        class="d-flex justify-space-between align-stretch mb-6"
        height="400"
    >
        <div id="pod-list" class="">
            <v-card class="mx-auto h-100" max-width="600" min-width="200">
                <v-toolbar color="secondary">
                    <v-btn variant="text" v-icon :icon="mdiMenu"></v-btn>
                    <v-toolbar-title><p style="text-align: left">Cameras</p></v-toolbar-title>
                    <v-btn v-bind:icon="mdiMagnify"></v-btn>
                </v-toolbar>
                <v-list
                    @click:select="selectPod"
                    :items="pods"
                    item-title="id"
                    item-value="name"
                >
                </v-list>
            </v-card>
        </div>
        <div id="camera-image" class="camera-image">
            <v-card class="mx-auto h-100">
                <v-sheet class="mx-auto my-2" max-width="400">
                    <v-slide-group>
                        <v-slide-group-item>
                            <v-btn class="mx-auto my-1" width="100" height="30" @click="history">
                                History
                            </v-btn>
                        </v-slide-group-item>
                        <v-slide-group-item>
                            <v-btn class="mx-auto my-1" width="100" height="30" @click="live">
                                Live
                            </v-btn>
                        </v-slide-group-item>
                        <v-slide-group-item>
                            <v-btn class="mx-auto my-1" width="100" height="30" @click="analytics">
                                Analytics
                            </v-btn>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
                <v-window v-model="onboarding">
                    <v-window-item>
                        <v-img
                            v-bind:src="imageDetailList[imageHistoryIndex].file"
                            class="mx-auto"
                            height="250px"
                            width="250px"
                            cover>
                        </v-img>
                        <v-slider
                            v-model="imageHistoryIndex"
                            :min="0"
                            :max="imageDetailList.length-1"
                            :step="1"
                            thumb-label
                            class="mx-auto my-2"
                            style="width: 200px; height: 30px"
                        ></v-slider>
                        <v-card-text>
                            時間:{{ imageDetailList[imageHistoryIndex].created_at }}
                        </v-card-text>
                    </v-window-item>
                    <v-window-item>
                        <v-img
                            v-bind:src="latestImage.file"
                            class="mx-auto"
                            height="300px"
                            width="300px"
                            cover>
                        </v-img>
                        <v-card-text>
                            最終更新:{{ latestImage.created_at }}
                        </v-card-text>
                    </v-window-item>
                    <v-window-item>
                        <v-img
                            v-bind:src="imageDetailList[0].file"
                            class="mx-auto"
                            height="300px"
                            width="300px"
                            cover>
                        </v-img>
                        <v-card-text>
                            最終更新:{{ latestImage.created_at }}
                        </v-card-text>
                    </v-window-item>
                </v-window>
            </v-card>
        </div>
        <div id="pod-stats">
            <v-card class="mx-auto h-100" max-width="600" min-width="200">
                <template v-slot:title>
                    Stats:
                </template>
            </v-card>
        </div>
    </v-sheet>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';
import { mdiMenu, mdiMagnify, mdiCamera } from '@mdi/js';
import { Pod, ImageDetail, emptyImageDetail } from '../api/requests';
import { getImageList, getLatestImagePromise } from '../api/requests';

const props = defineProps<{
    pods: Array<Pod>
}>();

const selectedPod = ref("");
const selectPod = (arg: any) => {
    selectedPod.value = arg.id;
    return
};

const onboarding = ref(1);
const history = () => {
    updateImageList();
    onboarding.value = 0;
}
const live = () => {
    onboarding.value = 1;
}
const analytics = () => {
    onboarding.value = 2;
}

const imageHistoryIndex = ref(0);
const imageDetailList = ref<ImageDetail[]>([emptyImageDetail]);
const updateImageList = () => {
    getImageList()
    .then(
        (value)=>{imageDetailList.value=value;}
    )
}

const latestImage = ref<ImageDetail>(emptyImageDetail);
const updateTimer = ref(0);
const updateLatestImage = () => {
    getLatestImagePromise()
    .then(
        (value: ImageDetail) => {
            latestImage.value = value;
        }
    );
}
onMounted(
    () => {
        updateTimer.value = setInterval(
            updateLatestImage,
            3000
        );
        updateImageList();
    }
)
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
