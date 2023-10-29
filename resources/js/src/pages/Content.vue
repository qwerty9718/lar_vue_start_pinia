<template>
    <div>
        <h1>{{$t('content')}}</h1>
        <h2>{{$t('num')}} : {{num}}</h2>
        <div>
            <button class="btn btn-success" @click="initNum(2)">init</button>
        </div>


        <div class="container" v-if="text">
            <h1>{{text}}</h1>
        </div>

    </div>
</template>


<script>
import {defineComponent} from 'vue'
import {mapActions,mapGetters} from "vuex";

export default defineComponent({
    name: "Content",

    computed:{
        ...mapGetters({
            num: "firs/getNumber",
            text: 'content_module/getText'
        })
    },

    methods:{
        ...mapActions({
            initNum: "firs/initNumber",
            getText: 'content_module/getTextDB'
        })
    },


    mounted() {
        this.getText();
    }

})
</script>



<style scoped>

</style>
