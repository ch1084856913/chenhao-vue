<template>
  <div class="c1">
          <van-collapse v-model="activeNames">
        <van-collapse-item title="s3联盟" name="1">
          只有飞速的旋转,才可以止住我的泪水,忘记你的模样
        </van-collapse-item>
        <van-collapse-item title="蛮子无敌" name="2">
          他们都说我是穿着东方盔甲的奇怪人,但我只想顶在最前面,用我的长枪保护...
        </van-collapse-item>
        <van-collapse-item title="英雄联盟" name="3" disabled>
         职责所在 We do what we must.
        </van-collapse-item>
      </van-collapse>
  </div>
</template>
<script>
export default {
            data() {
    return {
      activeNames: ['1']
    };
  }


}

    
</script>

