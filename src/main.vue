<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'
export default {
  store,
  name: 'app',
  mounted() {
    this.change_title(this.$route.path)
    this.$store.dispatch('SET_BASEINFO')
  },
  watch: {
    '$route' (val) {
      this.change_title(val.path)
    }
  },
  methods: {
    change_title(route){
      if (route.indexOf("repaire_staffs") != -1){
        document.title = "维修人员"
      } else if(route.indexOf("buyers") != -1){
        document.title = "采购员"
      } else if(route.indexOf("chief_cooks") != -1){
        document.title = "提单"
      } else if(route.indexOf("logistics_manager") != -1){
        document.title = "分配维修人员"
      } else if(route.indexOf("staffs") != -1){
        document.title = "维修人员"
      } else if(route.indexOf("room_managers") != -1){
        document.title = "客房经理"
      } else if(route.indexOf("room_waiters") != -1){
        document.title = "客房服务员"
      } else if(route.indexOf("repaire") != -1){
        document.title = "报修"
      } else if(route.indexOf("choose_entrance") != -1){
        document.title = "选择入口"
      } else {
        document.title = "登录"
      }
    }
  }
}
</script>

<style lang="scss">
@import "./styles/px2rem.scss";
@import "./styles/variable.scss";

.background {
  background-color: $background-color;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.navigation_bar {
  width: 100%;
  background-color: #fff;
  color: #3B3B3B;
  position: absolute;
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
  height: 50px;
  top: 0;
  z-index: 10;
}

.navigation_bar:after{
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  border-bottom: 2px solid #F3F3F3;
  color: #D9D9D9;
}

.tast_list_bd {
  @include px2rem(padding-bottom, 50px);
  padding-top: 50px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.divider {
  height: 5px;
  display: block;
}

.queding{
  color: white;
  font-family: PingFang-SC-Medium;
  text-align: center;
  font-size: 18px;
  line-height: 48px;
  font-weight: bold;
}

.shop_layout-scroll-absolute {
  background-color: #4AA3FF;
  position: absolute;
  width: 100%;
  bottom: 0;
  clear:both;
  height: 48px;
}
</style>
