<template>
  <div class="secChild">
    <router-link :to='{name:"UserRoute",params:{name: item.author.loginname}}'>
      <img :src="item.author.avatar_url" :title="item.author.loginname">
    </router-link>
    <div class="textDiv">
      <router-link :to='{name: "ArticleRoute", params:{id:item.id}}'>{{item.title}}</router-link>
      <div class="stuff">
        <span>回复：{{item.reply_count}}</span>
        <span>创建于：{{dealTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MianSecItem",
  props:{
    item:{
      type:Object,
      required:true,
    },
  },
  computed:{
    dealTime() {
      return String(this.item.create_at).match(/.{10}/)[0];
    }
  }
}
</script>
<style scoped>


a {
  text-decoration: none;
}

div.secChild {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;
  border-bottom: 2px solid #c0ccda;
  padding-bottom: 1rem;
}

div.secChild img {
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
}

.textDiv {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}

.textDiv a {
  color: black;
  font-size: 25px;
}

.textDiv a:visited {
  color: grey;
}

.stuff {
  font-size: 17px;
  margin-top: 1rem;
  color: #8492a6;
}

.stuff span:first-child {
  margin-right: 2rem;
}
</style>