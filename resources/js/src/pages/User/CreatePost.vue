<template>
    <div class="container">
        <div>
            <form>

                <div class="mb-3">
                    <label class="form-label">Title ru</label>
                    <input v-model="content.postData.title_ru" type="text" class="form-control" aria-describedby="emailHelp">
                    <p class="err" v-if="errors[this_route] && errors[this_route].title_ru">{{errors[this_route].title_ru[0]}}</p>
                </div>
                <div class="mb-3">
                    <label class="form-label">Body ru</label>
                    <textarea v-model="content.postData.body_ru" cols="10" rows="5" class="form-control"></textarea>
                    <p class="err" v-if="errors[this_route] && errors[this_route].body_ru">{{errors[this_route].body_ru[0]}}</p>
                </div>

                <div class="mb-3">
                    <label class="form-label">Title en</label>
                    <input v-model="content.postData.title_en" type="text" class="form-control" aria-describedby="emailHelp">
                    <p class="err" v-if="errors[this_route] && errors[this_route].title_en">{{errors[this_route].title_en[0]}}</p>
                </div>

                <div class="mb-3">
                    <label class="form-label">Body en</label>
                    <textarea v-model="content.postData.body_en" cols="10" rows="5" class="form-control"></textarea>
                    <p class="err" v-if="errors[this_route] && errors[this_route].body_en">{{errors[this_route].body_en[0]}}</p>
                </div>

                <button type="submit" class="btn btn-primary" @click.prevent="content.createPost(i18n.global.locale)">Отправить</button>
            </form>

        </div>
    </div>
</template>

<script setup>
import {content_Store} from "@/src/stores/Content/content_Store.js";
import i18n from "@/src/i18n/i18n.js";
import {error_Store} from "@/src/stores/error_Store.js";
import router from "@/src/router/router.js";
import {computed, onMounted, reactive} from "vue";


const this_route = router.currentRoute.value.name;
// const errors = error_Store().error_list;
const content = content_Store();
const errors = computed(() => reactive(error_Store().error_list));


</script>


<style scoped>
.err{
    color: red;
}
</style>
