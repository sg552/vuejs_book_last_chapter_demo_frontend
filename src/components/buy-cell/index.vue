<template>
  <div style="">
    <div class="cell">
      <div class="picker_text" style="">
        <dx-group>
          <popup-picker :title="title" placeholder="" :data="goods" :columns="1" v-model="currentValue.good_id" ref="picker3"
            @on-show="onShow" @on-hide="onHide" @on-change="onChange" show-name style="color: black;"></popup-picker>
        </dx-group>
      </div>
      <div class="title">
        购买数量
        <input v-model="currentValue.quantity" class="details" placeholder="例如:斤" type="text" name="name"/>
      </div>
      <div class="title">
        库房存量
        <div class="details" placeholder="斤" type="text" style="">{{storehouse_quantity}}</div>
      </div>
      <div class="title">
        备注
        <input v-model="currentValue.advise" type="text" name="advise" class="details" placeholder="例如:猪肉要前腿肉"/>
      </div>
      <span class="divider" style="height: 15px; background-color: #F3F3F3;"></span>
    </div>
  </div>
</template>

<script>
import { go } from '../../libs/router'
import PopupPicker from '../popup-picker'
import DxGroup from '../dx-group'

export default {
  data () {
    return {
      title: "物品名称",
      goods: [],   // existing_goods
      quantity: "",
      storehouse_quantity: "",
      advise: "",
      good_id: [],
      currentValue: new Object,
      userInfo: {}
    }
  },
  props: {
    value: {
      type: Object
    }
  },
  mounted () {
    this.currentValue = this.value
    this.$nextTick(()=>{
      this.$http.get(this.$configs.api + 'chief_cooks/get_goods?staff_id=' + this.$store.state.userInfo.id).then((response)=>{ console.info(response.body)
        this.goods = response.body.goods
      },(error) => {
        console.error(error)
      });
    })
  },
  computed: {
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (newVal) {
      this.$emit('input', newVal)
    }
  },
  methods: {
    get_storehouse_quantity (good) {
      good.storehouse_quantity = this.storehouse_quantity
    },
    onShow () {
      console.log('on show')
    },
    onChange (val) {
      console.info('通过选择物品,来查找当前物品的库存')
      console.info(val)
      var good_id = val.toString()
      console.info(good_id)
      this.$http.get(this.$configs.api + 'chief_cooks/get_storehouse_quantity_by_good_id', {
        params: {
          good_id: good_id
        }
      }).then((response)=>{
        this.storehouse_quantity = response.body.storehouse_quantity
        console.info(this.storehouse_quantity)
        if (this.storehouse_quantity > 10) {
          alert("库存还有余量 " + this.storehouse_quantity + " 建议少量购买!")
        }
      },(error) => {
        console.error(error)
      });
    },
    onHide (type) {
      console.log('on hide', type)
    }
  },
  components: {
    PopupPicker,
    DxGroup
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/px2rem.scss";
@import "../../styles/variable.scss";

.title {
  background-color: white;
  text-align: left;
  font-size: 17px;
  @include px2rem(padding, 10px);
  @include px2rem(padding-left, 15px);
  @include px2rem(padding-right, 15px);
  color: black;
}

.details {
  outline:none;
  border:0;
  font-size: 15px;
  @include px2rem(line-height, 26px);
  width: 50%;
  float: right;
  text-align:right;
}

.header {
  background-color: #F3F3F3;
  line-height: 20px;
  font-size: 18px;
  text-align: left;
  @include px2rem(padding, 10px);
  @include px2rem(padding-left, 15px);
}

.extra_cost {
  background-color: #fff;
  display: block;
  clear: both;
  @include px2rem(line-height, 53px);
  font-size: 18px;
  margin-bottom: 100px;
}

.plus {
	display: inline;
	float:right;
  @include px2rem(width, 20px);
  @include px2rem(margin-right, 5px);
}

.minus {
	display: inline;
	float:right;
  @include px2rem(width, 20px);
}

.counts {
	float:right;
	border: 0.5px solid #e2e2e2;
	line-height:18px;
	text-align:center;
  @include px2rem(width, 20px);
}

.number {
  display: inline-block;
  position: relative;
  top: -30px;
  left: 150px;
}

.picker_text {
  margin-top: -36px;
}
</style>


