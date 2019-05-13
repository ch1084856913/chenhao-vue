<template>
                     
        <div>
            <van-cell-group>
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
                </van-cell-group>

                <a href="login">
                        登陆
                </a>
         </div>
</template>
    

<style scoped>
       a{
            font:700 30px/40px"";
            margin-left: 20px;
            margin-top: 20px;
            color: brown;
       }
</style>