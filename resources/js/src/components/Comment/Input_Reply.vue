<template>
    <InputComment_Layout>
        <template v-slot:img>
            <img class="rounded-circle shadow-1-strong me-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaHBzhbO_5td7ftBcbh-8qThZ0OAHKpYXzkNFW3op&s" alt="avatar" width="40" height="40"/>
        </template>

        <template v-slot:text_area>
            <textarea v-model="replies_Store().replyData.body" class="form-control" id="textAreaExample" rows="2"></textarea>
            <label class="form-label" for="textAreaExample">Message</label>
            <p class="text-danger" v-if="errors[this_route] && errors[this_route].body">{{errors[this_route].body[0]}}</p>
        </template>

        <template v-slot:actions>
            <button type="button" class="btn btn-primary btn-sm" @click="replies_Store().createReply()">Post comment</button>
            <button type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
        </template>
    </InputComment_Layout>
</template>

<script setup>

import InputComment_Layout from "@/src/components/Comment/InputComment_Layout.vue";
import {replies_Store} from "../../stores/Content/Comments/replies_Store.js";
import {error_Store} from "../../stores/error_Store.js";
import {computed} from "vue";
import router from "@/src/router/router.js";

const errors = computed(() => error_Store().error_list);
const this_route = router.currentRoute.value.name;
</script>

<style scoped>

</style>
