<template>
    <div>
        <h1>Cabinet!!!!!!!!!!</h1>
        <div v-if="userStore.user">
            <h3>Name : {{userStore.user.name}}</h3>
            <h4>Email : {{userStore.user.email}}</h4>
            <div v-if="content.posts">
                <div v-for="post in content.posts" :key="post.id">
                    <h4>{{post.title}}</h4>
                    <p>{{post.body}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import {user_Store} from "@/src/stores/User/user_Store.js";
import {content_Store} from "@/src/stores/Content/content_Store.js";
import i18n from "@/src/i18n/i18n.js";
import {onMounted} from "vue";

const userStore = user_Store();
const content = content_Store();


onMounted(() => {

    userStore.getUserData();
    content.getPostsDB(i18n.global.locale)
});
</script>



<style scoped>

</style>
