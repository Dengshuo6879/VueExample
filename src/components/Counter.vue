/*** @Author: DengShuo * @Date: 2018-02-27 14:55:11 ***/
<template>
  <div id='app'>
    <div>
      Count is {{$store.state.counter.count}}
      <button @click='increment'>+5</button>
      <button @click="decrement">-5</button>
    </div>
    <br>
    <div>
      <p>{{$store.state.counter.txt?'对':'错'}}</p>
      <button @click='toggle'>Toggle</button>
    </div>
    <router-link to='/' id='rt'>
     回首页
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
/* export default{
    computed:mapGetters([]),
    methods: mapActions([
      'increment',
      'decrement',
    ])
  } */
export default {
  computed: mapGetters(["count", "txt"]),
  methods: mapActions(["increment", "decrement", "toggle"]),
  mounted: function(){
    // console.log($store)
  },
};
</script>

