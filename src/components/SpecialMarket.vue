<template>
  <div>
    <div class="fu_li_zhuan_qu" >
      <img src="../assets/images/nav0.png" class="logo_image"/>
      <div class="content" >
        <div class="title">
          新疆特色哈密瓜
        </div>
        <div class="logo_and_shop_name">
          <span> 又香又甜</span>
        </div>
      </div>
    </div>
    <span class="divider" style="height: 2px;"></span>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                homeDatas : [],
                mainDatas:[]
            }
        },
        mounted(){
        },
        methods:{
        },
        components:{
        },
    }
</script>
<style>
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
  line-height: 24px;
  -webkit-line-clamp: 2;
}

.fu_li_zhuan_qu .logo_and_shop_name {
  height: 21px;
}

.fu_li_zhuan_qu .logo_and_shop_name span {
  font-size: 13px;
  line-height: 23px;
  color: #919191;
  vertical-align: top;
}
</style>
