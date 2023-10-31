
<script>
import {defineComponent} from 'vue'
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
    name: "Watch",

    computed:{
        ...mapGetters({
            lang: 'lang_module/getLang'
        }),
    },



    methods:{
        ...mapActions({
            getPostsDB:'content_module/getPostsDB',
            getText: 'content_module/getTextDB'
        }),
    },

    watch: {
        lang: {
            handler(newVal) {
                this.getPostsDB({lang: this.$i18n.locale});
                this.getText({lang: this.$i18n.locale});
            },
            deep: true,
        },
    },
})
</script>



<style scoped>

</style>
