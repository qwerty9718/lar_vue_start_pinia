<template>
    <CreateMessage/>
    <ListMessages :list-messages="msgStore.listMessages"/>
</template>

<script setup>
import {onMounted} from "vue";
import {message_Store} from "@/src/stores/Messages/message_Store.js";
import CreateMessage from "@/src/components/Messages/CreateMessage.vue";
import ListMessages from "@/src/components/Messages/ListMessages.vue";

const msgStore = message_Store();

onMounted(() => {
    msgStore.getListMessages();
});
</script>

<style scoped>

</style>
