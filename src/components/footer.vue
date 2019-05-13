<template>
            <van-tabbar
            v-model="active"
            active-color="#07c160"
            >
            <van-tabbar-item icon="home-o" to="/home">首页{{active}}</van-tabbar-item>
            <van-tabbar-item icon="search" to="/category">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to="/shoppingcart">购物车</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/user">我的</van-tabbar-item>

            </van-tabbar>
</template>

<script>
            export default {
                data() {
                    return {
                        active: this.$store.getters.tabbar,
                    }
                },
                updated(){
                    this.upactive()
                },
                created(){
                    this.upactive();
                },
                watch:{
                    active:function(){
                        this.upactive();
                    },
                    $route:function(to,from){
                        this.upactive();
                    }
                },
                methods:{				
                    upactive(){					
                        this.nowPath=this.$route.path;
                        //vue提供的方法          
                        if(this.nowPath=="/"){          	
                            this.active=0          
                        }else if(this.nowPath=="/category"){          	
                            this.active=1          
                        }else if(this.nowPath=="/shoppingcart"){          	
                            this.active=2          
                        }else if(this.nowPath=="/user"){          	
                            this.active=3          
                        }				
                    }		  
                }
            }
</script>

<style scoped>
    
</style>