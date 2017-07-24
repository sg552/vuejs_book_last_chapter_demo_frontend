<template>
  <div class="home_h">
    <header class="m_header">
      <div class="m_header_box" id="my_search">
        <a href="#" class="icon_logo"></a>
        <form action="#">
          <img src="http://shangyunyijia.b0.upaiyun.com/image/shangyunyijia/btn_search.png!/fw/20" class="icon_search"/>
          <input type="search" class="search" placeholder="点击搜索" @click="goSearch($event)">
        </form>
      </div>
    </header>
  </div>
</template>

<script>
export default{
  methods:{
    goSearch(event){
      this.$router.push('/search');
      window.event? window.event.returnValue = false : event.preventDefault();
    }
  }
}
</script>
