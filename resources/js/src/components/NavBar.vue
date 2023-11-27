<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Навбар</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Переключатель навигации">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'main'}">
                            {{ $t('link_main') }}
                        </router-link>
                    </li>

                    <li class="nav-item" v-show="login_register.token">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'content'}">
                            {{ $t('link_content') }}
                        </router-link>
                    </li>

                    <li class="nav-item" v-show="!login_register.token">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'login'}">
                            {{ $t('link_login') }}
                        </router-link>
                    </li>

                    <li class="nav-item" v-show="!login_register.token">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'register'}">
                            {{ $t('link_register') }}
                        </router-link>
                    </li>

                    <li class="nav-item" v-show="login_register.token">
                        <button class="nav-link" aria-current="page" @click="logout">{{ $t('link_logout') }}</button>
                    </li>

                    <li class="nav-item" v-show="login_register.token">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'cabinet'}">
                            {{ $t('link_cabinet') }}
                        </router-link>
                    </li>

                    <li class="nav-item" v-show="login_register.token">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'create_post'}">
                            {{$t ('link_create_post')}}
                        </router-link>
                    </li>



                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
                    <button class="btn btn-outline-success" type="submit">Поиск</button>
                </form>

                <ul class="navbar-nav  mb-2">
                    <li class="nav-item mt-2 ml-2">
                        <button class="btn btn-success btn-sm" @click="language.setLanguage(language.lang,i18n)">{{ language.lang }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {user_Store} from "@/src/stores/User/user_Store.js";
import {login_register_Store} from "@/src/stores/User/login_register_Store.js";
import {lang_Store} from "@/src/stores/Language/lang_Store.js";
import i18n from "@/src/i18n/i18n.js";
import {computed, onMounted, ref} from "vue";
import router from "@/src/router/router.js";

const user = user_Store();
const login_register = login_register_Store();
const language = lang_Store();


async function logout() {
    const logout = await axios.post('/api/ru/auth/logout', {});
    await user.afterLogout();
}

onMounted(() => {
    language.getLangFromLocalStorage();
    login_register.getAccessToken();
})
</script>



<style scoped>

</style>
