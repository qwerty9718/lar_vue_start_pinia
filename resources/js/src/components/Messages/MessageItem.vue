<template>
    <div class="container msg">
        <div>
            <h4>{{message.id}}</h4>
            <p>{{message.body}}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
   message:{required:true,type:Object}
});
</script>

<style scoped>
.msg{
    border: 1px gray solid;
    border-radius: 10px;
}
</style>
