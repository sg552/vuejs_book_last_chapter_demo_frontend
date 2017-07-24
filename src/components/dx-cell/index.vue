<template>
  <div class="dx-box" @click="onClickItem()">
     <div class="dx-cell">
       <div class="dx-cell-hd">
         <label>{{title}}</label>
       </div>
			 <div class="dx-cell-hd dx-cell-primary">
         <div class="dx-cell-description" >
            {{description}}
         </div>
			 </div>
     </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../../styles/px2rem.scss";
@import "../../styles/dxstyles.scss";
.dx-cell-description {
  text-align: right;
}
</style>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClickItem () {
      this.$emit('on-click-item')
    }
  }
}
</script>

