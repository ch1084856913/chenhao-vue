<template>
  <div class="c1">
        <van-uploader :after-read="onRead">
                <van-icon name="photograph" />
        </van-uploader>
  </div>
</template>
<script>
            export default {
            methods: {
                onRead(file) {
                console.log(file)
                }
            }
            };
</script>
