<template>
  <div>
    <div @click="show_goods_details" class="fu_li_zhuan_qu" >
      <img :src="image_url" class="logo_image"/>
      <div class="content" >
        <div class="title">
          {{name}}
        </div>
        <div class="logo_and_shop_name">
          <span v-html="description"></span>
        </div>
      </div>
    </div>
    <span class="divider" style="height: 2px;"></span>
  </div>
</template>
<script>
import { go } from '../libs/router'

    export default{
        data(){
            return {
            }
        },
        props: {
          id: Number,
          name: String,
          description: String,
          image_url: String,
        },
        mounted(){
        },
        methods:{
         show_goods_details () {
           console.info(this.id)
           go("/shops/goods_details?good_id=" + this.id, this.$router)
         },
        },
        components:{
        },
    }
</script>
<style scoped>
    img[lazy=error] {
    background: url('../assets/images/err.png');
  }
  .fu_li_zhuan_qu {
  background-color: white;
  height: 110px;
  position: relative;
}

.fu_li_zhuan_qu .logo_image {
  width: 120px;
  height: 90px;
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  margin: auto;
}

.fu_li_zhuan_qu .content {
  margin-left: 160px;
  margin-right: 15px;
  position: relative;
  color: #434343;
  letter-spacing: .5px;
  font-family: 'PingFangSC Regular';
  font-size: 16px;
  text-align: left;
  top: 20px;
  height: 70px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.fu_li_zhuan_qu .content .title {
  overflow: hidden;
  height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: 20px;
  -webkit-line-clamp: 2;
}

.fu_li_zhuan_qu .logo_and_shop_name {
  height: 34px;
  margin-top: 5px;
}

.fu_li_zhuan_qu .logo_and_shop_name span {
  font-size: 13px;
  line-height: 13px;
  color: #919191;
  vertical-align: top;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
