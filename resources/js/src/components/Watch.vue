<template>

</template>

<script setup>
import {lang_Store} from "@/src/stores/Language/lang_Store.js";
import {content_Store} from "@/src/stores/Content/content_Store.js";
import {watch} from "vue";
import router from "@/src/router/router.js";

const language = lang_Store();
const content = content_Store();


watch(() => language.lang, (newVal) => {
    if(router.currentRoute._value.name){

        if (router.currentRoute._value.name === 'content' || router.currentRoute._value.name === 'cabinet'){
            content.getTextDB(newVal);
            content.getPostsDB(newVal);
        }

    }
});

</script>



<style scoped>

</style>
