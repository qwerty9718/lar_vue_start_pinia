<template>
    <div class="container">
        <div v-for="message in listMessages" :key="message.id">
            <MessageItem :message="message"/>
        </div>
    </div>
</template>

<script setup>
import MessageItem from "@/src/components/Messages/MessageItem.vue";

const props = defineProps({
   listMessages:{required:true}
});
</script>

<style scoped>

</style>
