<template>

    <div v-if="comments" v-for="item in comments" :key="item.id">
        <Comment_Item :comment="item" class="mb-2"/>
    </div>

    <button v-if="comments && comments.length > 0" @click="comments_Store().loadMore()">load more</button>


    <div v-if="comments && comments.length <= 0">
        комментариев нет
    </div>

</template>

<script setup>
import Comment_Item from "@/src/components/Comment/Comment_Item.vue";
import {comments_Store} from "@/src/stores/Content/Comments/comments_Store.js";

const props = defineProps({
    comments: { type: Array, required: true },
});


</script>

<style scoped>

</style>
