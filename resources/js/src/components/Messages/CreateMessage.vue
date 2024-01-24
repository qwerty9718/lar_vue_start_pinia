<template>
    <div class="container">
        <div class="mb-3">
            <label class="form-label">Body</label>
            <input type="text" class="form-control" aria-describedby="emailHelp" v-model="msgStore.messageData.body">
        </div>

        <div><button class="btn btn-primary" @click="msgStore.createMessage()">create</button></div>
    </div>
</template>

<script setup>
import {message_Store} from "@/src/stores/Messages/message_Store.js";

const msgStore = message_Store();

</script>

<style scoped>

</style>
