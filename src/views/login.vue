<template>
  <div>
    <div style="font-size: 20px; line-height: 50px;"> 账户登录 </div>

    <div class="login_input" style="margin-top: 60px;">

      <div style="background-color: white; border-bottom: 2px solid #E8E8E8; line-height: 36px;">
        <div class="phone">
          <input id="mobile_phone" v-model="mobile_phone"  type="number" name="mobile_user_phone" placeholder="请输入手机号" style="border: 0; background-color: white; font-size: 15px; color: #3B3B3B; outline: none;"/>
        </div>
          <button :disabled="this.$store.getters.get_button_disabled" @click="" class="yan_zheng">{{this.$store.state.countdown.button_title}}</button>
      </div>

      <div style="background-color: white; border-bottom: 2px solid #E8E8E8; line-height: 36px; position: relative;">
        <div class="phone">
          <input id="password" v-model="yan_zheng" name="password" placeholder="请输入密码" style="border: 0;
          background-color: white; font-size: 15px;  color: #3B3B3B; outline: none;"/>
        </div>
      </div>

      <div @click="login" class="login_button">
        登录
      </div>

    </div>
  </div>
</template>

<script>
import { go } from '../libs/router'

export default {
  data () {
    return{
      mobile_phone: "",
      yan_zheng: "",
      user_info: {
        id: ""
      },
      send_token: "",
      position:""
    }
  },
  methods: {
    login () {
      go('/shops/index', this.$router)
    },
  }
}

</script>

<style lang="scss" scoped>
@import "../styles/px2rem.scss";

input#mobile_phone::-webkit-input-placeholder {
  color: #B3B3B3;
}
input#password::-webkit-input-placeholder {
  color: #B3B3B3;
}
.crown{
  @include px2rem(width, 80px);
  @include px2rem(margin, 30px);
}
.login_input{
  @include px2rem(margin-left, 30px);
  @include px2rem(margin-right, 30px);
}
.phone{
  @include px2rem(margin-left, 15px);
  @include px2rem(margin-right, 120px);
  @include px2rem(margin-top, 20px);
}
.yan_zheng{
  border:none;
  background-color:#FFFFFF;
  float: right;
  @include px2rem(margin-right, 15px);
  @include px2rem(margin-top, -28px);
}
.login_button{
  background-color: rgba(232, 81, 11, 0.84);
  color: white;
  vertical-align: middle;
  line-height: 42px;
  border-radius: 8px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 16px;
  @include px2rem(margin-top, 40px);
}
</style>
