<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Навбар</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'main'}">Main</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" :to="{name: 'content'}">Content</router-link>
                    </li>

                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
                    <button class="btn btn-outline-success" type="submit">Поиск</button>
                </form>
                <ul class="navbar-nav  mb-2">


                    <li class="nav-item mt-2 ml-2">
                        <button class="btn btn-success btn-sm" @click="setLanguage(lang)">{{ lang }}</button>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
</template>


<script>
import {defineComponent} from 'vue'


export default defineComponent({
    name: "NavBar",
    data(){
        return{
            lang: ''
        }
    },

    methods:{
      getLang(){
          this.lang = localStorage.getItem('lang');
      },

        setLanguage(lang){
            let currentLang = '';

            if (lang === 'ru'){
                currentLang = 'en'
            }
            if (lang === 'en'){
                currentLang = 'ru';
            }

            this.$i18n.locale = currentLang;
            localStorage.setItem('lang', currentLang);
            this.lang = currentLang;
        }
    },

    mounted() {
        this.getLang();
    }
})
</script>



<style scoped>

</style>
