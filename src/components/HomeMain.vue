<template>
	<div class="home_m">
    <main class="m_product">
    <section class="product_box">
      <div class="product_top">
        <a href="#" class="product_left">
          <span class="divider" style="height: 4px;"></span>
          <div>促销活动</div>
        </a>
      </div>
    </section>
    </main>
    <PromotionActivity></PromotionActivity>
	</div>
</template>
<script>
    import PromotionActivity from './PromotionActivity.vue';

    export default{
        data(){
            return {
                homeDatas : [],
                mainDatas:[]
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                let _this = this;
                _this.$http.get('/home').then((res)=>{
                    _this.homeDatas.push(res.data[0]);
                    _this.homeDatas.push(res.data[1]);
                    _this.homeDatas.push(res.data[2]);
                    _this.homeDatas.push(res.data[3]);
                    _this.mainDatas = res.data;
                },(err)=>{
                    console.log(err);
                })
            }
        },
        components:{
          PromotionActivity
        },
    }
</script>
<style>
    img[lazy=error] {
    background: url('../assets/images/err.png');
  }
</style>
