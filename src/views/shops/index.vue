<template>
	<div class="home">
		<div class="m_layout">
            <!-- 头部区 -->
            <!--<HomeHeaderView></HomeHeaderView>-->
            <!-- 轮播图-->
            <HomeBannerView></HomeBannerView>
            <!--导航-->
            <HomeNavView></HomeNavView>
            <!--商品区-->
            <!--<HomeMainView></HomeMainView>-->
            <span class="divider" style="height: 4px;"></span>
            <div class="product_top">
              <div class="product_left">
                <span class="divider" style="height: 4px;"></span>
                <div>商品列表</div>
              </div>
            </div>
            <span class="divider" style="height: 2px;"></span>
            <SpecialMarket v-for="good in 10"></SpecialMarket>
        </div>
	</div>
</template>
 <script>
    import HomeHeaderView from '../../components/HomeHeader.vue';
    import HomeBannerView from '../../components/HomeBanner.vue';
    import HomeNavView from '../../components/HomeNav.vue';
    import HomeMainView from '../../components/HomeMain.vue';
    import SpecialMarket from '../../components/SpecialMarket.vue';
    import {bindEvent,scrollPic} from '../../libs/index.js'
    export default{
       components:{
        HomeHeaderView,
        HomeBannerView,
        HomeNavView,
        HomeMainView,
        SpecialMarket
       },
       mounted(){
        //bindEvent();
        scrollPic();
       }
    }
</script>
<style>
@import '../../assets/css/index.css';
</style>
