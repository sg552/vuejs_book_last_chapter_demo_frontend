<template>
  <div>
    <section class="product_info clearfix">
      <div>
        <div class="fu_li_zhuan_qu" >
          <img :src="good_image" class="logo_image"/>
          <div class="content" >
            <div class="title">
              {{good_name}}
            </div>
            <div class="logo_and_shop_name">
              <div class="product_pric">
                <span>￥</span>
                <span class="rel_price">{{price}}</span>
                <span> &nbsp x {{quantity}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
	export default{
    data () {
      return {
      }
    },
    props:  {
      good_image: String,
      good_name: String,
      price: Number,
      quantity: Number,
    },
		components:{
		}
	}
</script>

<style scoped>
@import '../assets/css/detail.css';
@import '../assets/css/mine.css';

.shop_layout-scroll-absolute {
  background-color: rgba(232, 81, 11, 0.78);
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
.details {
  outline:none;
  border:0;
  font-size: 15px;
  line-height: 26px;
  width: 50%;
  float: right;
  text-align:right;
}

.title {
  background-color: white;
  text-align: left;
  font-size: 17px;
  @include px2rem(padding, 10px);
  @include px2rem(padding-left, 15px);
  @include px2rem(padding-right, 15px);
  color: black;
}
</style>
