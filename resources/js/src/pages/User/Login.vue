<template>
    <div>
        <h1>Login</h1>
        <div class="container">
            <form>
                <div class="mb-3">
                    <label class="form-label">Адрес электронной почты</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="login_data.email">
                </div>

                <div class="mb-3">
                    <label class="form-label">Пароль</label>
                    <input type="password" class="form-control" v-model="login_data.password">
                </div>

                <button type="button" class="btn btn-primary" @click="login">Отправить</button>
            </form>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import {mapActions,mapGetters} from "vuex";

export default defineComponent({
    name: "Login",
    computed:{
        ...mapGetters({
            login_data: "login_register_module/getLoginData"
        })
    },
    methods:{
        ...mapActions({
            login: "login_register_module/login",
        })
    }
})
</script>



<style scoped>

</style>
