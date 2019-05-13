<template>
  <div class="c1">
            <!-- <van-rate v-model="value" /> -->

            <van-rate
            v-model="value"
            icon="like"
            void-icon="like-o"
            />

            <van-rate
            v-model="value"
            :size="25"
            color="#f44"
            void-icon="star"
            void-color="#eee"
            />

            <van-rate
            v-model="value"
            allow-half
            void-icon="star"
            void-color="#eee"
            />
  </div>
</template>
<script>
            // export default {
            // data() {
            //     return {
            //     value: 3
            //     };
            //   }
            // }

            export default {
            data() {
                return {
                value: 2.5
                };
              }
            }

</script>
