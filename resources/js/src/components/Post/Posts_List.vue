<template>
    <div v-if="posts">
        <div v-for="post in posts" :key="post.id">
            <Post_Item :post="post" :show-link="true"/>
        </div>
    </div>
</template>

<script setup>
import Post_Item from "@/src/components/Post/Post_Item.vue";

const props = defineProps({
    posts: { type: Array, required: true },
})
</script>



<style scoped>

</style>
