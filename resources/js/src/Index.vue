<template>

    <NavBar/>
    <RouterView/>
    <Watch/>


</template>

<script setup>
import NavBar from "@/src/components/NavBar.vue";
import Watch from "@/src/components/Watch.vue";
import {onMounted} from "vue";
import {message_Store} from "@/src/stores/Messages/message_Store.js";

const msgStore = message_Store();

onMounted(() => {
    window.Echo.channel('create_message_channel')
        .listen('.create_message_listen', res => {
            msgStore.addMessageToList(res.message);
        });
});

</script>



<style scoped>

</style>
