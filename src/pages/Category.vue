<template>
  <div class="category">
    <van-tabs title-active-color="#399">
      <van-tab v-for="(val,index) in com" :title="' 皮肤 ' + index" :key="index">
        <!-- 内容 {{ val }} -->
        <component :is="val"></component>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Category1 from '../components/Category1';
import Category2 from '../components/Category2';
import Category3 from '../components/Category3';
import Category4 from '../components/Category4';
import Category5 from '../components/Category5';


export default {
  data(){
    return  {
      com:['Category1','Category2','Category3','Category4','Category5']
    }
  },
  components:{
    Category1,Category2,Category3,Category4,Category5,
  },
  created(){
    this.$store.dispatch('tabbar',1)
  }
}
</script>

<style scoped>
.category >>> .van-tabs__line {
  background-color: #399;
}
</style>