<template>
    <div>
        <h1>{{$t('main')}}</h1>
        <h1>{{this.$i18n.locale}}</h1>
        <h1>{{$t('word')}}</h1>
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Main",
    methods:{

    }
})
</script>



<style scoped>

</style>
