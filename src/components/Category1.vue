<template>

   <div>
       <!-- {{data.id}}
         <div>{{data.price}}</div>
        <img class="tu1" :src="data.pic" alt=""> -->

       <h3>商品详情</h3>
      <!-- <img class="tu1" :src="data.pic" alt="">
      <img class="tu2" :src="data.pic && 'http://47.101.129.105/'+data.pic" alt="">
      <img class="tu3" :src="data.pic && 'http://47.101.129.105/'+data.pic" alt="">
      <img class="tu4" :src="data.pic && 'http://47.101.129.105/'+data.pic" alt=""> -->

      <img class="tu1" :src="'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539238023,4176856336&fm=26&gp=0.jpg'" alt="">
      <img class="tu2" :src="'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539238023,4176856336&fm=26&gp=0.jpg'" alt="">
      <img class="tu3" :src="'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539238023,4176856336&fm=26&gp=0.jpg'" ait="">
      <img class="tu4" :src="'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1539238023,4176856336&fm=26&gp=0.jpg'" alt="">
      <h4>{{data.desc}}</h4>

      
   </div>

</template>
<script>

export default {
    name:'Detail',
    data(){
        return {
            data:''

        }
    },
    created(){


        // if(this.$route.query.id){
        //     this.axios(`/api/detail?id=${this.$route.query.id}`).then(res=>{
        //         this.data = res.data.goods;
        //     })
        // }else{
        //     this.axios(`/api/detail?id=5c8ba4918faf45281c9b3f1e`).then(res=>{
        //         this.data = res.data.goods;
        //     })
        // }
        // this.axios("/static/data/data.json").then(res=>{
        //     this.data = res.data
        // })

        
        
    }
}
</script>
<style scoped>
     div .tu1{height: 200px;width:100%;}
     div .tu2{height:100px;width:100px;}
     div .tu3{height:100px;width:100px;margin-left:10px;}
     div .tu4{height:100px;width:100px;margin-left:10px;}
</style>


