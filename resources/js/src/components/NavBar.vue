<template>
<!--{{this.$i18n.locale}}-->
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
                        <router-link class="nav-link" aria-current="page" :to="{name: 'main'}">{{ $t('link_main') }}
                        </router-link>
                    </li>

                    <li class="nav-item" v-show="token">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'content'}">
                            {{ $t('link_content') }}
                        </router-link>
                    </li>

                    <li class="nav-item" v-show="!token">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'login'}">{{ $t('link_login') }}
                        </router-link>
                    </li>

                    <li class="nav-item" v-show="!token">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'register'}">
                            {{ $t('link_register') }}
                        </router-link>
                    </li>

                    <li class="nav-item" v-show="token">
                        <button class="nav-link" aria-current="page" @click="logout">{{ $t('link_logout') }}</button>
                    </li>

                    <li class="nav-item" v-show="token">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'cabinet'}">
                            {{ $t('link_cabinet') }}
                        </router-link>
                    </li>

                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
                    <button class="btn btn-outline-success" type="submit">Поиск</button>
                </form>
                <ul class="navbar-nav  mb-2">


                    <li class="nav-item mt-2 ml-2">
                        <button class="btn btn-success btn-sm" @click="setLanguage({lang: lang,$i18n: this.$i18n})">{{ lang }}</button>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
</template>


<script>
import {defineComponent} from 'vue'
import {mapActions,mapGetters} from "vuex";

export default defineComponent({
    name: "NavBar",

    methods: {
        ...mapActions({
            afterLogout: "user_module/afterLogout",
            getAccessToken: "login_register_module/getAccessToken",
            getLang: 'lang_module/getLangFromLocalStorage',
            setLanguage: 'lang_module/setLanguage'
        }),

        logout() {
            axios.post('/logout');
            localStorage.removeItem('x_xsrf_token');
            this.afterLogout();
            this.$router.push({name: 'main'});
        }

    },

    computed:{
      ...mapGetters({
          token: "login_register_module/getToken",
          lang: 'lang_module/getLang',
      })
    },

    mounted() {
        this.getLang();
        this.getAccessToken();
    }
})
</script>


<style scoped>

</style>
