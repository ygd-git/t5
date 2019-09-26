<template>
  <div class="container">
    p


    <router-link :to="`/person/${item}`" tag="div" v-for="item in 7" :key="item">
      {{item}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "p",

  components: {},

  watch:{
    $route(){

    }
  },

  data() {
    return {}
  },

  computed: {},

  created() {
    console.log(this.$route.params)
  },

  activated() {
    console.log(this.$route.params)
  },



  methods: {},
}
</script>

<style lang="scss" scoped>
.container {

}
</style>
