<template>
    <div class="small d-flex justify-content-start">
        <a href="#!" class="d-flex align-items-center me-3 text-decoration-none">
            <i class="far fa-thumbs-up me-2"></i>
            <p class="mb-0">Like</p>
        </a>

        <a href="#!" class="d-flex align-items-center me-3 text-decoration-none">
            <i class="fas fa-share me-2"></i>
            <p class="mb-0" @click="replies_Store().getReplies(comment)">replies</p>
        </a>

        <a href="#!" class="d-flex align-items-center me-3 text-decoration-none">
            <i class="far fa-comment-dots me-2"></i>
            <p class="mb-0" @click="comments_Store().deleteComment(comment)">delete</p>
        </a>
    </div>


</template>

<script setup>
import {comments_Store} from "@/src/stores/Content/Comments/comments_Store.js";
import {replies_Store} from "@/src/stores/Content/Comments/replies_Store.js";
import Input_Reply from "@/src/components/Comment/Input_Reply.vue";

const props = defineProps({
    comment: { type: Object, required: true },
})
</script>


<style scoped>

</style>
