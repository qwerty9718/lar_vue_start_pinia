<template>
    <div>
        <h1>{{$t('content')}}</h1>
        <h2>{{$t('num')}} : {{first.number}}</h2>
        <div>
            <button class="btn btn-success" @click="first.initNumber(2)">init</button>
        </div>


        <div class="container" v-if="content.text">
            <h1>{{content.text}}</h1>
        </div>

    </div>
</template>


<script setup>
import {fist_Store} from "@/src/stores/fist_Store.js";
import {content_Store} from "@/src/stores/Content/content_Store.js";
import {onMounted} from "vue";
import i18n from "@/src/i18n/i18n.js";

const first = fist_Store();
const content = content_Store();

onMounted(() => {
    content.getTextDB(i18n.global.locale);
})
</script>



<style scoped>

</style>
