<template>
  <div class="container">
    Person
    now:{{now}}

    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from "@/components/TabBar";

  export default {
    name: "Person",

    components: {
      TabBar
    },

    data() {
      return {
        now: new Date(),
      }
    },

    computed: {},

    created() {

    },

    methods: {},
  }
</script>

<style lang="scss" scoped>
  .container {

  }
</style>
