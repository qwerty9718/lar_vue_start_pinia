<template>

    <InputComment_Layout>
        <template v-slot:img>
            <img class="rounded-circle shadow-1-strong me-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaHBzhbO_5td7ftBcbh-8qThZ0OAHKpYXzkNFW3op&s" alt="avatar" width="40" height="40"/>
        </template>

        <template v-slot:text_area>
            <textarea @click="setReplyShowInput" v-model="commentData.body" class="form-control" id="textAreaExample" rows="2"></textarea>
            <label class="form-label" for="textAreaExample">Message</label>

            <div v-show="replies_Store().showInputReply === 0">
                <p class="text-danger" v-if="errors[this_route] && errors[this_route].body">{{errors[this_route].body[0]}}</p>
            </div>

        </template>

        <template v-slot:actions>
            <button type="button" class="btn btn-primary btn-sm" @click="comments_Store().createComment()">Post comment</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
        </template>
    </InputComment_Layout>

</template>

<script setup>
import {computed, onMounted, reactive} from "vue";
import {comments_Store} from "@/src/stores/Content/Comments/comments_Store.js";
import {error_Store} from "@/src/stores/error_Store.js";
import router from "@/src/router/router.js";
import {user_Store} from "@/src/stores/User/user_Store.js";
import InputComment_Layout from "@/src/components/Comment/InputComment_Layout.vue";
import {replies_Store} from "@/src/stores/Content/Comments/replies_Store.js";


const commentData = computed(() => comments_Store().comments_Data);
const errors = computed(() => error_Store().error_list);
const this_route = router.currentRoute.value.name;

const setReplyShowInput = () => {
    error_Store().emptyErrorList();
    replies_Store().showInputReply = 0;
}

</script>


<style scoped>

</style>
