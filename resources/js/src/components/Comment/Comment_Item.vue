<template>
    <div class="card-body">
        <div class="d-flex flex-start align-items-center">
            <img class="rounded-circle shadow-1-strong me-3"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaHBzhbO_5td7ftBcbh-8qThZ0OAHKpYXzkNFW3op&s" alt="avatar" width="60"
                 height="60" />
            <div>
                <h6 class="fw-bold text-primary mb-1">{{comment.title}}</h6>
                <p class="text-muted small mb-0">
                    {{comment.time_create}}
                </p>
            </div>
        </div>

        <p class="mt-3 mb-4 pb-2">{{comment.body}}</p>

        <Comment_Item_Actions_Aria :comment="comment"/>

        <Input_Reply style="margin-bottom: 40px" v-if="replies_Store().showInputReply === comment.id"/>

        <hr >
    </div>
</template>

<script setup>
import Comment_Item_Actions_Aria from "@/src/components/Comment/Comment_Item_Actions_Aria.vue";
import Input_Reply from "@/src/components/Comment/Input_Reply.vue";
import {replies_Store} from "@/src/stores/Content/Comments/replies_Store.js";

const props = defineProps({
    comment: { type: Object, required: true },
});


</script>



<style scoped>

</style>
