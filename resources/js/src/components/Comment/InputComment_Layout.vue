<template>
    <div class="card-footer py-3 border-0">
        <div class="d-flex flex-start w-100">

            <slot name="img"></slot>

            <div class="form-outline w-100">
                <slot name="text_area"></slot>
            </div>

        </div>
        <div class="float-end mt-2 pt-1">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script setup>

import {comments_Store} from "@/src/stores/Content/Comments/comments_Store.js";
</script>


<style scoped>

</style>
