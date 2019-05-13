<template>
  <div class="c1">
            <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="瞎子经典语句" name="1">
               我用双手，成就你的梦想。
            </van-collapse-item>
            <van-collapse-item title="盲侠" name="2">
                如果暴力不是为了杀戮 那将毫无意义了 Force is meaningless without skill.
            </van-collapse-item>
            <van-collapse-item title="110" name="3">
                双眼失明丝毫不影响我追捕敌人，因为我能闻到他们身上的臭味 Blindness is no impairment against a smelly enemy.
            </van-collapse-item>
            </van-collapse>
  </div>
</template>
<script>
export default {
            data() {
    return {
      activeName: '1'
    };
  }
}
</script>
