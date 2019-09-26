<template>
  <div class="container">
    <div class="swiper">
      <img src="~@assets/images/zhi_swiper_1.png" alt="">
      <img :class="{active: show}" src="~@assets/images/zhi_swiper_2.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ZhiHuSwiper",

  components: {},

  data() {
    return {
      show: false
    }
  },

  computed: {},

  created() {
    setTimeout(()=>{
      this.show = true
      setTimeout(()=>{
        this.show = false

      }, 4000)
    }, 4000)
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
@import "~@/style/mixin";

.container {
  .swiper{
    position: relative;

    img{
      position: absolute;
      left: 0;
      top: 0;
      transition: all 4s;

      @include wl(375px, 150px);

      &:last-child{
        clip-path: circle(400px at 375px 550px);

        &.active{
          clip-path: circle(400px at 375px 100px);
        }
        // background: radial-gradient(circle at 50px 100px, transparent 10px, #00adb5 0) top left/100px 100% no-repeat;
      }
    }
  }
}
</style>
