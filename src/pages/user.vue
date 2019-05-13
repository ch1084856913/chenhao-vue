<template>
          <div>
                <van-nav-bar
                title="用户"
                left-text="返回"
                right-text=""
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
                />
              
            <a href="reg">注册</a>
              
          </div>  

          


</template>

<script>
            export default {
            methods: {
                onClickLeft() {
                this.$router.go(-1)
                },
                onClickRight() {
                Toast('注册');
                }
            }
            }
</script>
<style scope>
        a{
            font:700 30px/40px"";
            margin-left: 20px;
            margin-top: 20px;
            color: brown;
        }
</style>