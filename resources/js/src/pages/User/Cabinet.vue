<template>
    <div>
        <h1>Cabinet</h1>
        <div v-if="user">
            <h3>Name : {{user.name}}</h3>
            <h4>Email : {{user.email}}</h4>
        </div>

    </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
    name: "Cabinet",

    computed:{
        ...mapGetters({
            user: "user_module/getUser"
        })
    },

    methods:{
        ...mapActions({
            getUser: 'user_module/getUserData'
        })
    },

    mounted() {
        this.getUser();
    }
})
</script>



<style scoped>

</style>
