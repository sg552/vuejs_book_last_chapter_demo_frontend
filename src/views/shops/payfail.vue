<template>
  <div style="background-color: #fff; height: 100%;">
    <div class="express" style="border: none;">
      <div class="info status_image_and_word">

        <img src='http://siweitech.b0.upaiyun.com//image/399/btn_fail@2x.png'/>

        <div class="word" style='color: #EE692C; font-size: 16px; margin-top: 8px; font-weight: 500;'>支付失败</div>
        <div class="word" style='color: #797979; font-size: 14px; margin-top: 8px;'>请您重新在商城购买下单</div>
      </div>

      <div style="margin-top: 50px; position: relative;font-size: 14px; color: #797979;">
        <div class="order_message">
          <span class="title"> 订单号: </span> <span class="detail">{{order_id}}</span>
        </div>
        <div class="order_message">
          <span class="title">总价:</span> <span  class="detail"> ￥{{order.total_cost}} </span>
        </div>
        <div class="order_message">
          <span class="title">收货人: </span> <span class="detail">{{order.receiver_name}}</span>
        </div>
        <div class="order_message">
          <span class="title"> 收货地址: </span> <span  class="detail">{{order.receiver_address}}</span>
        </div>
        <div class="order_message">
          <span class="title"> 收货电话: </span> <span  class="detail">{{order.receiver_phone}}</span>
        </div>
      </div>

      <div style="margin-top: 20%;">
        <img src="http://siweitech.b0.upaiyun.com//image/400/failurebutton@3x.png" @click="go_shops" style="width: 76%; height: 50px;"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subtitle:not(:last-child), .title:not(:last-child) {
  margin-bottom: 0px;
}
.title {
  font-size: 14px;
  margin: 0;
}
.detail {
  float: right;
  margin-right: 28px;
}
.order_message {
  height: 30px;
  line-height: 30px;
}
span.title {
  line-height: 30px;
  float: left;
  margin-left: 28px;
}
.info.status_image_and_word {
  padding-top: 49px;
}
.info.status_image_and_word img{
  position: relative;
  width: 87px!important;
}
.info.status_image_and_word .word {
  font-size: 16px;
}
</style>

<script>
import { go } from '../../libs/router'

export default {
  data () {
    return {
      order_id: this.$route.query.order_id,
      order: {},
      status_image: 'http://shangyunyijia.b0.upaiyun.com/image/shangyunyijia/支付成功icon@3x.png'
    }
  },
  mounted () {
    this.$http.get(this.$configs.api + 'goods/buy_success?order_id=' + this.order_id).then((response)=>{
      console.info(this.order_id)
      console.info(response.body)
      this.order = response.body.order
    },(error) => {
      console.error(error)
    });
  },
  methods: {
    go_shops () {
      go("/shops/index", this.$router)
    }
  },
  components: {
  }
}
</script>

