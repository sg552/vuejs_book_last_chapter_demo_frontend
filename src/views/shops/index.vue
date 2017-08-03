<template>
  <div class="background">
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
            <div>商品列表</div>
          </div>
        </div>
        <span class="divider" style="height: 2px;"></span>
        <SpecialMarket :id="good.id" :name="good.name" :description="good.description" :image_url="good.image_url" v-for="good in goods"></SpecialMarket>
      </div>
    </div>
    <NavBottomView></NavBottomView>
  </div>
</template>
 <script>
    import HomeHeaderView from '../../components/HomeHeader.vue';
    import HomeBannerView from '../../components/HomeBanner.vue';
    import HomeNavView from '../../components/HomeNav.vue';
    import HomeMainView from '../../components/HomeMain.vue';
    import SpecialMarket from '../../components/SpecialMarket.vue';
    import {bindEvent,scrollPic} from '../../libs/index.js'
    import NavBottomView from '../../components/NavBottom.vue';

    export default{
      data () {
        return {
          goods: [],
        }
      },
       components:{
        HomeHeaderView,
        HomeBannerView,
        HomeNavView,
        HomeMainView,
        SpecialMarket,
        NavBottomView
       },
       mounted () {
        //bindEvent();
        scrollPic();
        this.loadPage ();
       },
       computed () {
       },
       methods: {
         loadPage () {
           this.$http.get(this.$configs.api + 'goods/get_goods').then((response)=>{
             console.info(response.body)
             this.goods= response.body.goods
           },(error) => {
             console.error(error)
           });
         },
       }
    }
</script>
<style scoped>
.background {
   padding-bottom: 50px;
}

@import '../../assets/css/index.css';
</style>
