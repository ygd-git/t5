<template>
  <div style="padding-bottom: 40px;">
    <!--    <span @click="$store.commit('reduce')">-</span> {{count}} <span @click="$store.commit('add')">+</span>-->
    <ul class="menu-list">
      <li class="menu-item" v-for="item in menuList" @click="gotoMenu(item)">{{item.title}}</li>
    </ul>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar"
import {mapState} from "vuex"

export default {
  name: 'Home',

  components: {
    TabBar
  },

  data() {
    return {
      now: new Date(),
      active: 0,
      menuList: [
        {
          title: '知乎swipe',
          url: '/ZhiHuSwiper'
        }
      ]
    }
  },

  computed: {
    ...mapState(['count']),
  },

  methods: {
    gotoMenu(item) {
      this.$router.push(item.url)
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  /*object-fit: fill;
  object-position: center center*/
}

.menu-list {
  .menu-item {
    color: darkblue;
    cursor: pointer;
    margin: 10px 0;
  }
}
</style>
