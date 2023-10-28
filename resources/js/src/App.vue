<template>
    <NavBar/>
    <RouterView/>
</template>

<script>
import {defineComponent} from 'vue'
import NavBar from "@/src/components/NavBar.vue";

export default defineComponent({
    name: "App",
    components: {NavBar},



    data(){
        return{
            testData: 'This is test'
        }
    }
})
</script>



<style scoped>

</style>
