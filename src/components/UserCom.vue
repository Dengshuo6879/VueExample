<template>
    <div class='secDiv'>
        <div class='profile' v-loading.lock='loading'>
            <div>
                <img :src='userInfo.avatar_url' :title='userInfo.loginname'>
                <span>{{userInfo.loginname}}</span>
            </div>
            <p>
                <icon name='score' scale='4'></icon>
                <span>积分：</span>{{userInfo.score}}</p>
            <p>
                <icon name='github' scale='4'></icon>
                <span>Github：</span> https://github.com/{{userInfo.githubUsername}}</p>
            <p>
                <icon name='time' scale='4'></icon>
                <span>注册时间：</span>{{dealCommentTime(userInfo.create_at)}}</p>
        </div>

        <div class='recentReplies' v-loading.lock='loading'>
            <p>最近参与的话题</p>
            <template v-for='(item,index) of userInfo.recent_replies'>
                <div v-if='index < 4' :key='index'>
                    <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}'>
                        <img :src='item.author.avatar_url' :title='item.author.loginname'>
                    </router-link>
                    <router-link :to='{name: "ArticleRoute",params:{id:item.id}}'>
                        <p class='userTitle'>{{item.title}}</p>
                    </router-link>
                </div>
            </template>
        </div>

        <div class='recentTopics' v-loading.lock='loading'>
            <p>最近创建的话题</p>
            <template v-for='(item,index) of userInfo.recent_topics'>
                <div v-if='index < 5 && item' :key='index'>
                    <img :src='item.author.avatar_url' :title='item.author.loginname'>
                    <router-link :to='{name: "ArticleRoute",params:{id:item.id}}'>
                        <p class='userTitle'>{{item.title}}</p>
                    </router-link>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["userInfo"]),
    loading:{
      get:function(){
        return this.$store.state.userCom.loading;
      },
      set:function(newValue){
        this.$store.state.userCom.loading=newValue;
      }
    }
  },
  methods: {
    ...mapActions(["getUser"]),
    dealCommentTime(time) {
      return String(time)
        .match(/.{10}/)[0]
        .replace(/.{2}/, "")
        .replace(/[T]/, " ");
    }
  },
  created() {
    this.getUser(this.$route.path);
  },
  /* beforeRouteUpdate(to, from, next) {
    this.$http({
      url: `https://cnodejs.org/api/v1${to.path}`,
      method: "get"
    })
      .then(res => {
        this.userInfo = res.data.data;
      })
      .catch(res => {
        console.log("UserCom.vue: ", res);
      });
    next();
  }, */
  watch: {
    userInfo(val) {
      if (val) {
        
      }
    }
  }
};
</script>

<style scoped>
.secDiv {
  padding: 0;
  box-sizing: border-box;
  border: none;
}

.profile {
  padding: 1rem;
  background: #eff2f7;
  border-radius: 0.3rem;
}

.profile div {
  margin-bottom: 1.5rem;
}

.profile div span {
  font-size: 25px;
  color: black;
  margin-left: 1rem;
}

.profile p {
  display: flex;
  align-items: center;
  color: grey;
  margin: 0.5rem 0;
}

.profile p span {
  margin: 0 0.5rem;
  color: black;
}

.profile svg {
  color: black;
  margin-left: 0.2rem;
}

.recentTopics img,
.recentReplies img {
  width: 5rem;
  height: 5rem;
}

.recentTopics > p,
.recentReplies > p {
  margin-bottom: 1rem;
  color: black;
  padding-bottom: 1.5rem;
}

.userTitle {
  font-size: 25px;
}

.recentTopics {
  padding: 1rem;
  background: #d3dce6;
  border-radius: 0.3rem;
}

.recentReplies {
  background: #e5e9f2;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.3rem;
}

.recentReplies div,
.recentTopics div {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  border-bottom: 2px solid #c0ccda;
  padding-bottom: 1rem;
}

.recentTopics div {
  border-bottom: 2px solid #99a9bf;
}

.recentReplies div img,
.recentTopics div img {
  margin-right: 1rem;
}
</style>
