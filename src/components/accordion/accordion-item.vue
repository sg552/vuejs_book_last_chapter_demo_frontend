<template>
   <div class="accordion-item-box" @click="onItemClick" >
     <div class="accordion-item-cell">
       <div class="accordion-item-cell-hd">
         <label>主卧</label>
       </div>
       <div class="accordion-item-cell-hd accordion-item-cell-primary">
         <img class="arrow_image" src="http://siweitech.b0.upaiyun.com//image/446/arrow_down.png" v-if="duty_selected"/>
         <img class="arrow_image" src="http://siweitech.b0.upaiyun.com//image/447/arrow_right.png" v-if="!duty_selected"/>
         <div class="hadration" @click.stop="hadration"> 增配 </div>
         <div class="delete" @click.stop="deleteRow"> 删除 </div>
       </div>
     </div>
     <div v-show="duty_selected" class="accordion-item-description" >
       <slot name="table">
       </slot>
     </div>
   </div>
</template>
<script>
import { childMixin } from '../../mixins/multi-items'
export default {
  mixins: [childMixin],
  data () {
    return {
      duty_selected: false,
      last_one: false
    }
  },
  mounted () {
    this.$on('on-item-click', this.on_item_click)
  },
  watch: {
    currentSelected (newVal) {
      if (!newVal) {
        console.info('watch')
        this.duty_selected = false
      }
    }
  },
  methods: {
    hadration () {
      console.info('lalalal')
      this.$emit('on-hadration')
    },
    deleteRow () {
      this.$emit('on-delete')
      console.info('===lalalal')
    },
    on_item_click(val) {
      console.info('click !! current == ' + this.currentSelected)
      if (this.currentSelected && !this.duty_selected) {
        console.info('on true')
        this.duty_selected = true
      } else {
        console.info('on false')
        this.duty_selected = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/px2rem.scss";

.accordion-item-box {
  position: relative;
  font-size: 18px;
  line-height: 18px;
  background: #fff;
}
.accordion-item-cell {
  position: relative;
  display: flex;
  @include px2rem(padding, 22px);
}
.accordion-item-cell-hd {
  label {
    text-align: left;
    color: #000;
    display: block;
    max-width: 200px;
    min-width: 105px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .hadration {
    color: white;
    border-radius: 5px;
    background-image: url("http://siweitech.b0.upaiyun.com//image/449/login_button_bg.png");
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 34px;
    line-height: 34px;
    font-weight: 500;
    width: 80px;
    @include px2rem(right, 262px);
    text-align: center;
  }
  .delete {
    background-color: #ff6c6c;
    font-weight: 500;
    color: white;
    border-radius: 5px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 34px;
    line-height: 34px;
    width: 80px;
    @include px2rem(right, 104px);
    text-align: center;
  }
}
.accordion-item-cell-primary {
  text-align: left;
  flex: 1;
}
.accordion-item-description {
  display: block;
}

.arrow_image {
  height: 16px;
  width: 16px;
}

.accordion-item-box:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #D9D9D9;
  color: #D9D9D9;
}

</style>
