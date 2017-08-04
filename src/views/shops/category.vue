<template>
  <div class="background">
    <div class="home">
      <div class="m_layout">
        <!-- 轮播图-->
        <HomeBannerView></HomeBannerView>
        <!--导航-->
        <span class="divider" style="height: 4px;"></span>
        <div class="product_top">
          <div class="product_left">
            <div>商品分类</div>
          </div>
        </div>
        <span class="divider" style="height: 2px;"></span>
        <HomeNavView></HomeNavView>
      </div>
    </div>
    <NavBottomView :is_category="is_category"></NavBottomView>
  </div>
</template>
 <script>
    import HomeBannerView from '../../components/HomeBanner.vue';
    import HomeNavView from '../../components/HomeNav.vue';
    import {bindEvent,scrollPic} from '../../libs/index.js'
    import NavBottomView from '../../components/NavBottom.vue';

    export default{
      data () {
        return {
          is_category: true,
        }
      },
       components:{
        HomeBannerView,
        HomeNavView,
        NavBottomView
       },
       mounted () {
        //bindEvent();
        scrollPic();
       },
       computed:  {
       },
       methods: {
       }
    }
</script>
<style scoped>
.background {
   padding-bottom: 50px;
}

@import '../../assets/css/index.css';
</style>
