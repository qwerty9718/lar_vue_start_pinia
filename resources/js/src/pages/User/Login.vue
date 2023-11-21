<template>

    <div>
        <h1>Login</h1>

        <div class="container">
            <form>

                <div class="mb-3">
                    <label class="form-label">Адрес электронной почты</label>
                    <input type="email" class="form-control" placeholder="Email" v-model="login_reg.login_data.email">
                    <p class="text-danger" v-if="login_reg.errors.email">{{login_reg.errors.email[0]}}</p>
                </div>

                <div class="mb-3">
                    <label class="form-label">Пароль</label>
                    <input type="password" class="form-control" v-model="login_reg.login_data.password">
                    <p class="text-danger" v-if="login_reg.errors.password">{{login_reg.errors.password[0]}}</p>
                    <p class="text-danger" v-if="login_reg.errors.message">{{login_reg.errors.message}}</p>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="login_reg.login_data.remember">
                    <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
                </div>

                <button type="button" class="btn btn-primary" @click="login_reg.login(i18n.global.locale)">Отправить</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import {login_register_Store} from "@/src/stores/User/login_register_Store.js";
import i18n from "@/src/i18n/i18n.js";
const login_reg = login_register_Store();

</script>



<style scoped>

</style>
