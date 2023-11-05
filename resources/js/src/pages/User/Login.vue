<template>

    <div>
        <h1>Login</h1>

        <div class="container">
            <form>
                <div class="mb-3">
                    <label class="form-label">Адрес электронной почты</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="login_data.email">
                    <p class="text-danger" v-if="errors.email">{{errors.email[0]}}</p>
                </div>

                <div class="mb-3">
                    <label class="form-label">Пароль</label>
                    <input type="password" class="form-control" v-model="login_data.password">
                    <p class="text-danger" v-if="errors.password">{{errors.password[0]}}</p>
                    <p class="text-danger" v-if="errors.message">{{errors.message}}</p>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="login_data.remember">
                    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
                </div>

                <button type="button" class="btn btn-primary" @click="login({language:this.$i18n.locale})">Отправить</button>
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
            login_data: "login_register_module/getLoginData",
            errors: "login_register_module/getErrors"
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
