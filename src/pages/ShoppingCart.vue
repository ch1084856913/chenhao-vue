<template>
<div>
          <!-- <router-link :to="`/detail?id=${item._id}`"> -->
            <van-nav-bar
                title="购物车"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
            />
            
               <router-link to="/category">
                    <van-card
                    v-for="item in list" 
                    :num="item.num"
                    :tag="item.tag"
                    :price="item.presentPrice"
                    :desc="item.desc"  
                    :title="item.desc"
                    :thumb="item.thumb"
                    origin-price="10.00"   
                   
                >
                    <div slot="footer">
                        <van-button size="mini">-</van-button>
                        <van-button size="mini">+</van-button>
                    </div>
                </van-card>
               </router-link>

            <van-submit-bar
                :price="3050"
                button-text="提交订单"
                @submit="onSubmit"
            >
            <van-checkbox v-model="checked">全选</van-checkbox>
            <span slot="tip">
                你的收货地址不支持同城送, <span>修改地址</span>
            </span>
            </van-submit-bar>

         
</div>               
</template>

<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            onClickRight() {
            
            },
            onSubmit(){

            },
            checked(){},
            href(){
                this.$store.dispatch('tabbar',1);
                this.$router.push({path:"/category"});
            }
        },
        created(){
            this.axios('/data/goods.json').then(
                res=>{
                    this.list = res.data;
            })
        }  
    }
</script>

<style>
       
</style>