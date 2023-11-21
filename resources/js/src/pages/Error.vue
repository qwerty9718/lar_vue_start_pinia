<template>
<div>
    <h1>Error</h1>
    <button @click.prevent="getHome()">get home</button>
</div>
</template>


<script setup>
import router from "@/src/router/router.js";
const getHome = () => {
    router.push({name: 'main'})
}
</script>

<style scoped>

</style>
