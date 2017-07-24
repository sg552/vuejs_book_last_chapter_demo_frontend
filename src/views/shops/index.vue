<template>
	<div class="home">
		<div class="m_layout">
            <!-- 头部区 -->
           <HomeHeaderView></HomeHeaderView>
            <!-- 轮播图-->
            <HomeBannerView></HomeBannerView>
            <!--导航-->
            <HomeNavView></HomeNavView>
            <!--商品区-->
            <HomeMainView></HomeMainView>
        </div>
	</div>
</template>
 <script>
    import HomeHeaderView from '../../components/HomeHeader.vue';
    import HomeBannerView from '../../components/HomeBanner.vue';
    import HomeNavView from '../../components/HomeNav.vue';
    import HomeMainView from '../../components/HomeMain.vue';
    import {bindEvent,scrollPic} from '../../libs/index.js'
    export default{
       components:{
        HomeHeaderView,
        HomeBannerView,
        HomeNavView,
        HomeMainView
       },
       mounted(){
        bindEvent();
        scrollPic();
       }
    }
</script>
<style>
@import '../../assets/css/index.css';
</style>
