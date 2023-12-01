<template>
    <!--  Спиннер загрузки  -->
    <div v-if="!post" class="spinner-border" role="status">
        <span class="visually-hidden">Загрузка...</span>
    </div>


    <div v-if="post">
        <Post_Item :show-link="false" :post="post"/>

        <Comment_Layout>
            <template v-slot:input_comment>
                <Input_Comment/>
            </template>

            <template v-slot:list_comment>
                <List_Comments :comments="comments"/>
            </template>
        </Comment_Layout>
    </div>

</template>

<script setup>
import router from "@/src/router/router.js";
import {computed, onBeforeMount} from "vue";
import {comments_Store} from "@/src/stores/Content/Comments/comments_Store.js";

import List_Comments from "@/src/components/Comment/List_Comments.vue";
import Input_Comment from "@/src/components/Comment/Input_Comment.vue";
import Comment_Layout from "@/src/components/Comment/Comment_Layout.vue";
import Post_Item from "@/src/components/Post/Post_Item.vue";
import {user_Store} from "../../stores/User/user_Store.js";


onBeforeMount(() => {
    if (!user_Store().user){user_Store().getUserData();}
    if (!post){}
    comments_Store().route_id = router.currentRoute._value.params.id;
    comments_Store().getPostWithComments();
});

const post = computed(() => comments_Store().post[comments_Store().route_id]);
const comments = computed(() => comments_Store().comments[comments_Store().route_id]);


</script>

<style scoped>

</style>
