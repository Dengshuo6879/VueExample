<template>
    <div class='head'>
        <router-link to='/'>
            <img src='../assets/cnodejs.svg' title='cnodejs.svg'>
        </router-link>
        <el-button type='text' @click='changeDialogVisible'>关于</el-button>
        <!-- <el-dialog title='Vue.js重写CnodeJS社区' v-model='$store.state.cnodeHead.dialogVisible' size='tiny'> -->
        <el-dialog title='Vue.js重写CnodeJS社区' v-model='dialogVisible' size='tiny'>
            <div class='dialogDiv'>
                <span>
                    <strong>作者: &nbsp;&nbsp;</strong>
                </span>
                <a href='https://shuirong.github.io/' target='_blank'>林水溶</a>
                <br>
                <span>
                    <strong>源代码: &nbsp;&nbsp;</strong>
                </span>
                <a href='https://github.com/shuiRong/VueCnodeJS' target='_blank'>Github</a>
                <span class='star'>&nbsp;&nbsp;Star Star</span>
                <br>
                <br>
                <span>
                    <strong>技术栈: </strong>
                </span>
                <ul>
                    <li>Vue.js</li>
                    <li>Vue-router</li>
                    <li>Axios</li>
                    <li>Element</li>
                    <li>CnodeJS API</li>
                </ul>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["dialogVisible"]),
    dialogVisible:{
      get:function(){
        return this.$store.state.cnodeHead.dialogVisible;
      },
      set:function(newValue){
        this.$store.state.cnodeHead.dialogVisible = newValue;
      }
    }
  },
  methods: mapActions(["changeDialogVisible"]),
  mounted() {
    // console.log(this.computed)
    // console.log(mapGetters());
    // this.$router.push('/user/atian25')
  },
};
</script>

<style scoped>
@import url("https://cdn.bootcss.com/element-ui/1.2.8/theme-default/index.css");
.head {
  background: #324057;
  height: 3.6rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.head img {
  width: 10rem;
  height: 3.5rem;
  margin-left: 10rem;
}

.head > button {
  float: right;
  line-height: 3.6rem;
  margin-right: 10rem;
  font-weight: bold;
  font-size: 20px;
  color: white;
  letter-spacing: 2px;
  padding-top: 0.2rem;
}

.head .dialogDiv {
  font-size: 17px;
}

.head ul {
  margin-left: 1rem;
}

.head a {
  text-decoration: none;
  color: #13ce66;
}

.head .star {
  font-weight: bold;
  color: #1d8ce0;
  font-size: 20px;
}
</style>
