<template>
  <div class="background">
    <header class="top_bar">
      <a onclick="window.history.go(-1)" class="icon_back"></a>
      <h3 class="cartname">订单支付</h3>
    </header>

    <div class="tast_list_bd" style="background-color: #F3F3F3; padding-top: 0; padding-bottom: 80px;">
      <div class="goods_detail" style="">

        <main class="detail_box">
				<!--
        <section class="banner_box">
          <div style="margin-top: 45px">
            <div class="extra_cost">
              <span style="float: left; margin-left: 15px;"> 收货地址:</span>
              <input class="mobile_user_info" v-model="mobile_user_address"  type="text" name="cost" placeholder="例如: 北京市朝阳区大望路西西里小区4栋2单元201" style=""></input>
            </div>
            <div class="extra_cost" style=" ">
              <span style="float: left; margin-left: 31px;"> 收货人:</span>
              <input class="mobile_user_info" name="name" v-model="mobile_user_name" v-validate="'required|required'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text"  placeholder="例如: 张三" style=""></input>
              <p v-show="errors.has('name')" class="help is-danger">收货人不能为空</p>
            </div>
            <div class="extra_cost" style=" ">
              <span style="float: left; margin-left: 48px;"> 电话:</span>
              <input class="mobile_user_info" v-model="mobile_user_phone" type="text" name="cost" placeholder="例如: 18588888888"
              style=""></input>
            </div>
          </div>
        </section>
				-->

        <span class="divider"></span>

				<form style="margin-top: 45px;">
					<div class="column is-12">
						<label class="label">收货人</label>
						<p class="control has-icon has-icon-right">
						<input name="name" v-model="mobile_user_name" v-validate="'required|required'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="例如: 张三" autofocus="autofocus"/>
						<span v-show="errors.has('name')" class="help is-danger">收货人不能为空</span>
						</p>
					</div>

					<div class="column is-12">
						<label class="label">收货地址</label>
						<p class="control has-icon has-icon-right">
						<input name="url" v-model="mobile_user_address" v-validate="'required|required'" :class="{'input': true, 'is-danger': errors.has('url') }" type="text" placeholder="例如: 北京市朝阳区大望路西西里小区4栋2单元201"/>
						<span v-show="errors.has('url')" class="help is-danger">收货地址不能为空</span>
						</p>
					</div>

					<div class="column is-12">
						<label class="label">收货电话</label>
						<p class="control has-icon has-icon-right">
						<input name="phone" v-model="mobile_user_phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="例如: 18888888888"/>
						<span v-show="errors.has('phone')" class="help is-danger">电话号码不能为空</span>
						</p>
					</div>
				</form>

        <span class="divider"></span>

        <section class="product_info clearfix" v-if="single_pay">
          <div>
            <div class="fu_li_zhuan_qu" >
              <img :src="good_images[0]" class="logo_image"/>
              <div class="content" >
                <div class="title">
                  {{good.name}}
                </div>
                <div class="logo_and_shop_name">
                  <div class="product_pric">
                    <span>￥</span>
                    <span class="rel_price">{{good.price}}</span>
                    <span> &nbsp x {{buy_count}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="product_info clearfix" v-else v-for="product in cartProducts">
          <div>
            <div class="fu_li_zhuan_qu" >
              <img :src="product.image" class="logo_image"/>
              <div class="content" >
                <div class="title">
                  {{product.title}}
                </div>
                <div class="logo_and_shop_name">
                  <div class="product_pric">
                    <span>￥</span>
                    <span class="rel_price">{{product.price}}</span>
                    <span> &nbsp x {{product.quantity}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <span class="divider" style="height: 15px;"></span>
          <div class="extra_cost" style=" ">
            <span style="float: left; margin-left: 15px;"> 卖家留言:</span>
            <input v-model="guest_remarks" id="extra_charge" type="text" name="cost" placeholder="选填: 对本次交易的说明" style="border: 0; background-color: white;
            font-size: 15px; color: #48484b; outline: none; width: 60%;"></input>
          </div>
        </section>

        <section>
          <span class="divider"></span>
          <div class="extra_cost" style=" ">
            <span style="float: left; margin-left: 15px;"> 应付金额:</span>
            <div v-if="single_pay" class="rel_price" type="text" name="cost" style="border: 0; background-color: white;
            font-size: 20px; color: #ff621a; font-weight: bold; outline: none; text-align: right; padding-right: 20px;"> {{total_cost | currency }}</div>
            <div v-else class="rel_price" type="text" name="cost" style="border: 0; background-color: white;
            font-size: 20px; color: #ff621a; font-weight: bold; outline: none; text-align: right; padding-right: 20px;"> {{ total | currency }}</div>

          </div>
        </section>
        </main>

        <span class="divider"></span>

        <div style="height: 55px;  display: flex; width: 100%; padding: 0px 10px; background-color: #fff;" @click="">
          <div style="flex: 1; display: flex;">
            <div style="margin-top: 10px;">
              <img src="../../assets/微信icon@3x.png" style="width: 35px;"/>
            </div>
            <span style="margin-top: 8px; font-size: 18px; line-height:40px; margin-left: 10px;">微信支付</span>
          </div>

          <div style=" padding: 14px 10px;" @click="user_wechat">
            <img src="../../assets/选中3x.png" style="width: 28px;"/>
            <!--<img src="../../assets/未选中3x.png" v-else/>-->
          </div>
        </div>
      </div>
    </div>

    <div class="shop_layout-scroll-absolute" style="">
      <div class="queding" @click="buy">
        立即支付
      </div>
    </div>

  </div>
</template>
<script>
   import { go } from '../../libs/router'
   import { mapGetters } from 'vuex'
   export default{
        data(){
            return {
                good_images: [],
                good: "",
                buy_count: this.$route.query.buy_count,
                good_id: this.$route.query.good_id,
                open_id: this.$store.state.userInfo.open_id,
                mobile_user_address: '',
                mobile_user_name: '',
                mobile_user_phone: '',
                guest_remarks: '',
                is_use_wechat: false,
            }
        },
        watch:{
        },
        mounted(){
          if (this.single_pay) {
              this.$http.get(this.$configs.api + 'goods/goods_details?good_id=' + this.good_id).then((response)=>{
                  console.info(this.good_id)
                  console.info(response.body)
                  this.good = response.body.good
                  this.good_images = response.body.good_images
              },(error) => {
                  console.error(error)
              });
          }
        },
        computed:  {
            total () {
              return this.cartProducts.reduce((total, p) => {
                return (total + p.price * p.quantity)
              }, 0)
            },
            single_pay () {
               return this.good_id && this.buy_count
            },
            total_cost () {
              return this.good.price * this.buy_count
            },
            ...mapGetters({
              cartProducts: 'cartProducts',
              checkoutStatus: 'checkoutStatus'
            })
        },
        methods:{
						validateBeforeSubmit() {
						  //拦截异步操作
						  return new Promise((resolve, reject) => {
								this.$validator.validateAll().then(result => {
									console.info(result)
									if (result) {
										// eslint-disable-next-line
										console.info("============表单验证成功===")
										resolve(true);
									} else {
                    //alert('请填写完整的收货信息!');
                    resolve(false);
									}
								});
							})
						},
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
            },
            buy (){
							let result = this.validateBeforeSubmit().then((resolve)=>{
								if (resolve) {
									console.info('true ==== ')
									let params
									if (this.single_pay) {
										params = {
											good_id: this.good_id,
											buy_count: this.buy_count,
											total_cost: this.total_cost,
											guest_remarks: this.guest_remarks,
											mobile_user_address: this.mobile_user_address,
											mobile_user_name: this.mobile_user_name,
											mobile_user_phone: this.mobile_user_phone,
											open_id: this.open_id
										}
									} else {
										console.info(this.total)
										params = {
											goods: this.cartProducts,
											total_cost: this.total,
											guest_remarks: this.guest_remarks,
											mobile_user_address: this.mobile_user_address,
											mobile_user_name: this.mobile_user_name,
											mobile_user_phone: this.mobile_user_phone,
											open_id: this.open_id
										}
									}
									this.$http.post(this.$configs.api + 'goods/buy',
									params
									).then((response) => {
										console.info("============点击了立即支付===")
										console.info(response.body.order_number)
										let order_number =  response.body.order_number
										this.purchase(order_number)
									}, (error) => {
										console.error(error)
									});
								} else {
									console.info('false ==== 请填写完整的收货信息')
								}
							});
						},
            purchase (order_number) {
              //调起微信支付界面
              if (typeof WeixinJSBridge == "undefined"){
                if( document.addEventListener ){
                  document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
                }else if (document.attachEvent){
                  document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
                  document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
                }
              }else{
                this.onBridgeReady(order_number);
              }
            },
            onBridgeReady (order_number) {
              let that = this
              let total_cost
              if (this.single_pay) {
                total_cost = this.total_cost
              } else {
                total_cost = this.total
              }
              this.$http.post(this.$configs.api + 'payments/user_pay',
              {
                open_id: this.$store.state.userInfo.open_id,
                total_cost: total_cost,
                order_number: order_number
              }).then((response) => {
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', {
                        "appId": response.data.appId,
                        "timeStamp": response.data.timeStamp,
                        "nonceStr": response.data.nonceStr,
                        "package": response.data.package,
                        "signType": response.data.signType,
                        "paySign":  response.data.paySign
                    },
                    function(res){
                        // TODO 下面代码仅用于调试
                        // alert("res.err_msg: " + res.err_msg + ", err_desc: " + res.err_desc)
                        if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                        // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                          // go to success page
                          //go('/shops/paysuccess?order_id=' + order_number, this.$router)
                          that.$router.push({ path: '/shops/paysuccess?order_id=' + order_number });
                        } else {
                          // 显示取消支付或者失败
                          //go('/shops/payfail?order_id=' + order_number, this.$router)
                          that.$router.push({ path: '/shops/payfail?order_id=' + order_number });
                        }
                    }
                );
              }, (error) => {
                console.error(error)
                //alert(error)
              });
            }
          },
    }
</script>

<style scoped>
@import '../../assets/css/detail.css';
@import '../../assets/css/index.css';
@import '../../assets/css/validate.css';

.background {
}

.shop_layout-scroll-absolute {
  background-color: #ff621a;
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

.extra_cost span {
  font-size: 15px;
}

.mobile_user_info {
  border: 0;
  background-color: white;
  font-size: 15px;
  color: #48484b;
  outline: none;
  width: 60%;
}

.column {
	padding: 5px 10px;
}

.label {
	text-align: left;
}

.help.is-danger {
  color: #ff621a;
}

.input.is-danger, .textarea.is-danger {
  border-color: #ff621a;
}
</style>
