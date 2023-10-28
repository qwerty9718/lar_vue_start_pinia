<template>
    <div>
        <h1>{{$t('content')}}</h1>
        <h2>{{$t('num')}} : {{num}}</h2>
        <div>
            <button class="btn btn-success" @click="initNum(2)">init</button>
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
            num: "firs/getNumber"
        })
    },

    methods:{
        ...mapActions({
            initNum: "firs/initNumber"
        })
    }

})
</script>



<style scoped>

</style>
