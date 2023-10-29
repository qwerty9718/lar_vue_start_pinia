<template>
    <div>
        <h1>Register</h1>

        <div class="container">
            <form>

                <div class="mb-3">
                    <label class="form-label">Имя</label>
                    <input type="text" class="form-control" placeholder="Name" v-model="register_data.name">
                </div>

                <div class="mb-3">
                    <label class="form-label">Адрес электронной почты</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="register_data.email">
                </div>

                <div class="mb-3">
                    <label class="form-label">Пароль</label>
                    <input type="password" class="form-control" v-model="register_data.password">
                </div>

                <div class="mb-3">
                    <label class="form-label">Повторите пароль</label>
                    <input type="password" class="form-control" v-model="register_data.password_confirmation">
                </div>

                <button type="button" class="btn btn-primary" @click="register">Отправить</button>
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
            register_data: "login_register_module/getRegisterData"
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
