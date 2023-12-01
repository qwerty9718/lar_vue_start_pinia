<template>
    <div v-if="post">
        <h4>{{post.title}}</h4>
        <p>{{post.body}}</p>
        <router-link  v-if="showLink" :to="{name: 'comments', params:{id: post.id}}" class="btn btn-primary">comments</router-link>
        <hr>
    </div>

</template>

<script setup>

const props = defineProps({
    post:{type:Object, required: true},
    showLink:{type:Boolean, required:true}
});
</script>


<style scoped>

</style>
