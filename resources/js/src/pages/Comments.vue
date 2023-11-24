<template>

    <div>
        <h3>title</h3>
        <input type="text" v-model="comments.commentData.title">
        <p class="err" v-if="errors[this_route] && errors[this_route].title">{{errors[this_route].title[0]}}</p>
    </div>

    <div>
        <h3>Body</h3>
        <input type="text" v-model="comments.commentData.body">
        <p class="err" v-if="errors[this_route] && errors[this_route].body">{{errors[this_route].body[0]}}</p>
    </div>

    <button @click.prevent="comments.createComment('ru')">create</button>
</template>

<script setup>
import {comments_Store} from "@/src/stores/Content/comments_Store.js";
import router from "@/src/router/router.js";
import {computed, reactive} from "vue";
import {error_Store} from "@/src/stores/error_Store.js";


const comments = comments_Store();
const this_route = router.currentRoute.value.name;
const errors = computed(() => reactive(error_Store().error_list));
</script>


<style scoped>
.err{
    color: red;
}
</style>
