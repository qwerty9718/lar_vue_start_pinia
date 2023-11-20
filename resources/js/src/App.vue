<template>
    <NavBar/>
    <RouterView/>
    <Watch/>
</template>

<script>
import {defineComponent} from 'vue'
import NavBar from "@/src/components/NavBar.vue";
import Watch from "@/src/components/Watch.vue";

export default defineComponent({
    name: "App",
    components: {Watch, NavBar},



    data(){
        return{
            testData: 'This is test'
        }
    }
})
</script>



<style scoped>

</style>
