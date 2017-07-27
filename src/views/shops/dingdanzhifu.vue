<template>
  <div class="background">
    <div class="goods_detail">
      <header class="top_bar">
        <a onclick="window.history.go(-1)" class="icon_back"></a>
        <h3 class="cartname">订单支付</h3>
      </header>

      <main class="detail_box">
      <section class="banner_box">
        <div style="margin-top: 45px">
          <div class="extra_cost">
            <span style="float: left; margin-left: 15px;"> 收货地址:</span>
            <input v-model="mobile_user_address"  type="text" name="cost" placeholder="选填: 对本次交易的说明" style="border: 0; background-color: white;
            font-size: 15px; color: #48484b; outline: none;"></input>
          </div>
          <div class="extra_cost" style=" ">
            <span style="float: left; margin-left: 33px;"> 收货人:</span>
            <input v-model="mobile_user_name" type="text" name="cost" placeholder="选填: 对本次交易的说明" style="border: 0; background-color: white;
            font-size: 15px; color: #48484b; outline: none;"></input>
          </div>
          <div class="extra_cost" style=" ">
            <span style="float: left; margin-left: 51px;"> 电话:</span>
            <input v-model="mobile_user_phone" type="text" name="cost" placeholder="选填: 对本次交易的说明" style="border: 0; background-color: white;
            font-size: 15px; color: #48484b; outline: none;"></input>
          </div>
        </div>
      </section>

      <span class="divider"></span>

      <section class="product_info clearfix">
        <div>
          <div class="fu_li_zhuan_qu" >
            <img src="http://siweitech.b0.upaiyun.com/image/silulegou/D2CtBk3myFGjdCIm.jpg" class="logo_image"/>
            <div class="content" >
              <div class="title">
                {{good.name}}哈密瓜
              </div>
              <div class="logo_and_shop_name">
                <div class="product_pric">
                  <span>￥</span>
                  <span class="rel_price">12.0{{good.price}}</span>
                  <span> x1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <span class="divider" style="height: 15px;"></span>
        <div class="extra_cost" style=" ">
          <span style="float: left; margin-left: 15px;"> 卖家留言</span>
          <input v-model="advise" id="extra_charge" type="text" name="cost" placeholder="选填: 对本次交易的说明" style="border: 0; background-color: white;
          font-size: 15px; color: #48484b; outline: none;"></input>
        </div>
      </section>

      <section>
        <span class="divider"></span>
        <div class="extra_cost" style=" ">
          <span style="float: left; margin-left: 15px;"> 应付金额:</span>
          <div class="rel_price" type="text" name="cost" style="border: 0; background-color: white;
            font-size: 20px; color: #F23434; outline: none;"> ￥120 </div>
        </div>
      </section>
      </main>

      <span class="divider"></span>

      <div style="height: 80px;  display: flex; padding: 0 3%; background-color: #fff;" @click="change_pay_type('wei_xin')">
        <div style="flex: 1; display: flex;">
          <div style="width:60px; height: 60px; margin-top: 10px;">
            <img src="../../assets/微信icon@3x.png" />
          </div>
          <span style="margin-top: 20px; font-size: 20px; line-height:40px;margin-left: 10px;">微信支付</span>
        </div>

        <div style=" padding: 14px 10px;" @click="user_wechat">
          <img src="../../assets/选中3x.png"  v-if="is_use_wechat === true"/>
          <img src="../../assets/未选中3x.png" v-if="is_use_wechat === false"/>
        </div>
      </div>

      <div class="shop_layout-scroll-absolute" style="">
        <div class="queding" @click="">
          立即支付
        </div>
      </div>

    </div>
  </div>
</template>
<script>
   export default{
        data(){
            return {
                good_images: [],
                good: "",
                buy_count: 1,
                good_id: this.$route.query.good_id,
                mobile_user_address: '',
                mobile_user_name: '',
                mobile_user_phone: '',
                advise: '',
                is_use_wechat: false
            }
        },
        watch:{
        },
        mounted(){
           this.$http.get(this.$configs.api + 'goods/goods_details?good_id=' + this.good_id).then((response)=>{
             console.info(this.good_id)
             console.info(response.body)
             this.good = response.body.good
             this.good_images = response.body.good_images
           },(error) => {
             console.error(error)
           });
        },
        methods:{
            plus () {
              this.buy_count = this.buy_count + 1
            },
            minus () {
              if(this.buy_count > 1) {
                this.buy_count = this.buy_count - 1
              }
            },
            user_wechat () {
              if (this.is_use_wechat === false) {
                this.is_use_wechat = true
              } else {
                this.is_use_wechat = false
              }
            }
        }
    }
</script>

<style scoped>
@import '../../assets/css/detail.css';
@import '../../assets/css/index.css';
.background {
}

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
.extra_cost {
  background-color: #fff;
  display: block;
  clear: both;
  @include px2rem(line-height, 53px);
  font-size: 18px;
  line-height: 40px;
}
</style>
