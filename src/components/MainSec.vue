<template>
    <div class='secDiv' v-loading='$store.state.mainSec.loading'>
        <!-- <div v-for='item of $store.state.mainSec.content' :key='item.id'>
            <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}'>
                <img :src='item.author.avatar_url' :title='item.author.loginname'>
            </router-link>
            <div class='textDiv'>
                <router-link :to='{name:"ArticleRoute",params:{id:item.id}}'>{{item.title}}</router-link>
                <div class='stuff'>
                    <span>回复：{{item.reply_count}}</span>
                    <span>创建于：{{dealTime}}</span>
                </div>
            </div>
        </div> -->
        <div v-for='item of $store.state.mainSec.content' :key='item.id'>
          <main-sec-item :item='item'></main-sec-item>
        </div>
      </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MainSecItem  from "./MianSecItem";

export default {
  name: "MainSection",
  components: {
        MainSecItem,
    },
  computed: {
    ...mapGetters(["item"]),
  },
  methods: {
    ...mapActions(["getData", "scrollMethod"])
  },
  mounted() {
    console.log(this);
    window.addEventListener("scroll", this.scrollMethod);
  },

  created() {
    this.getData();
    // this.$store.dispatch('getData')  也可行
  },
  watch: {
    content(val) {
      if (val) {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.secDiv {
  width: 60%;
  background: #f9fafc;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  padding: 2rem;
  min-height: 40rem;
}
</style>
