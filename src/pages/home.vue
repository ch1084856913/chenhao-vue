<template>
    <div class="home">
         <van-row>
            <van-col span="3">
               <van-icon class="chat-o" name="chat-o" size="30px" color="#399" />
            </van-col>
      <van-col span="17">
        <van-search 
          label="地址"
          shape="round"
          placeholder="请输入搜索关键词" 
          v-model="value" 
        />
        </van-col>
        <van-col span="4">
        <van-icon class="qr" name="qr" size="40px" color="#399" />
        </van-col>
        </van-row>


        <!-- 轮播图 -->
         <van-swipe :height="150" :autoplay="1000" indicator-color="#000">
          <!-- <van-swipe-item>
              <img class="swipe-item-img"  src="../assets/img/banner1.png">
          </van-swipe-item>
          <van-swipe-item>
              <img class="swipe-item-img"  src="../assets/img/banner2.png">
          </van-swipe-item>
          <van-swipe-item>
              <img class="swipe-item-img"  src="../assets/img/banner3.png">
          </van-swipe-item> -->



         <van-swipe-item v-for="(image, index) in images" :key="index">
         <img :src="image" class="swipe-item-img" />
         </van-swipe-item>
         </van-swipe>

         <!-- <van-row class="home-product">
              <van-col  class="home-product-col1" span="8" v-for="v in 12" :key="v">
                <a href="#">
                  <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1041887465,2326472795&fm=26&gp=0.jpg">
                  <span>龙瞎{{v}}</span>
                </a>

                
               
              </van-col>
         </van-row> -->
          <van-row class="home-product">
              <van-col  class="home-product-col1" span="8" v-for="v in 12" :key="v">
                <a href="#">
                  <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1041887465,2326472795&fm=26&gp=0.jpg">
                  <span>龙瞎{{v}}</span>
                </a>

                
               
              </van-col>
         </van-row>
       
    </div>
</template>

<script>
export default {
data(){
    return{
      value:'',
      images: [
            '/assets/img/banner1.png',
            '/assets/img/banner2.png',
            '/assets/img/banner3.png',
      ]
    }
  }
}
</script>

<style scoped>
        .home{
          background:#fff;
        }

       .chat-o{
                padding-left: 20px; 
                padding-top: 12px;
       }

       .qr{
            padding-top: 8px;

       }
        
        .swipe-item-img{width: 100%; height: 100%;}
        .home-product {
          background-color: white;
          margin-top:10px;
          padding: 0 10px;
        }

       .home-product-col1 {
        /* padding-top: 10px; */
        /* padding-bottom: 10px; */
        /* height: 70px; */
        text-align: center;
        /* background: red; */
      }
      .home-product-col1 img {
        width:90%;
      }
      .home-product-col1 span {
        display: block;
        color: #555;
        font-size: 8px;
        /* margin-bottom: 10px; */
      }

        
</style>