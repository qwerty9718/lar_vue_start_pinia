<template>
    <div>
        <h1>Cabinet</h1>
        <div v-if="user">
            <h3>Name : {{user.name}}</h3>
            <h4>Email : {{user.email}}</h4>
            <div v-if="posts">
                <div v-for="post in posts" :key="post.id">
                    <h4>{{post.title}}</h4>
                    <p>{{post.body}}</p>
                </div>
            </div>
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
            user: "user_module/getUser",
            posts: 'content_module/getPosts'
        })
    },

    methods:{
        ...mapActions({
            getUser: 'user_module/getUserData',
            getPostsDB:'content_module/getPostsDB'
        })
    },

    mounted() {
        this.getUser();
        this.getPostsDB({lang: this.$i18n.locale});
    }
})
</script>



<style scoped>

</style>
