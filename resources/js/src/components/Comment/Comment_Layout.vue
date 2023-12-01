<template>


    <section>
        <div class="container-fluid  mt-3">
            <div class="row d-flex justify-content-center">
                <div class="col-md-12 col-lg-12 col-xl-12">

                    <slot name="input_comment"></slot>
                    <slot name="list_comment"></slot>

                </div>
            </div>
        </div>
    </section>
</template>


<script setup>

import {comments_Store} from "../../stores/Content/Comments/comments_Store.js";
</script>


<style scoped>

</style>
