<template>
    <div>
        <h1>Register</h1>

        <div class="container">
            <form>

                <div class="mb-3">
                    <label class="form-label">Имя</label>
                    <input type="text" class="form-control" placeholder="Name" v-model="register_data.name">
                    <p class="text-danger" v-if="errors.name">{{errors.name[0]}}</p>
                </div>

                <div class="mb-3">
                    <label class="form-label">Адрес электронной почты</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="register_data.email">
                    <p class="text-danger" v-if="errors.email">{{errors.email[0]}}</p>
                </div>

                <div class="mb-3">
                    <label class="form-label">Пароль</label>
                    <input type="password" class="form-control" v-model="register_data.password">
                    <p class="text-danger" v-if="errors.password">{{errors.password[0]}}</p>
                </div>

                <div class="mb-3">
                    <label class="form-label">Повторите пароль</label>
                    <input type="password" class="form-control" v-model="register_data.password_confirmation">
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="register_data.remember">
                    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
                </div>

                <button type="button" class="btn btn-primary" @click="register({language:this.$i18n.locale})">Отправить</button>
            </form>
        </div>
    </div>
</template>


<script>
import {defineComponent} from 'vue'
import {mapActions,mapGetters} from "vuex";
export default defineComponent({
    name: "Register",
    computed:{
        ...mapGetters({
            register_data: "login_register_module/getRegisterData",
            errors: "login_register_module/getErrors"
        })
    },
    methods:{
        ...mapActions({
            register: "login_register_module/register"
        })
    }
})
</script>



<style scoped>

</style>
