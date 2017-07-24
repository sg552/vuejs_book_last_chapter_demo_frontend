<template>
<!-- 置于中间的的picker -->
<div>
  <dx-modal v-model="showValue" @close="closeModel">
    <div class="dx-picker-header" slot="header">
      <flexbox>
        <flexbox-item class="vux-popup-picker-header-menu vux-popup-picker-cancel" @click.native="onHide(false)">取消</flexbox-item>
        <flexbox-item class="vux-popup-picker-header-menu vux-popup-picker-header-menu-right" @click.native="onHide(true)">确认</flexbox-item>
      </flexbox>
    </div>
    <picker slot="body" :data="data" :columns=columns v-model='tempValue' @on-change='onPickerChange'></picker>
  </dx-modal>
</div>

</template>
<script>
const getObject = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}
import { Flexbox, FlexboxItem } from '../flexbox'
import value2name from '../../filters/value2name'
import array2string from '../../filters/array2String'
import DxModal from '../dx-modal'
import Picker from '../picker'
export default {
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    columns: {
      type: Number,
      default: 0
    }
  },
  filters: {
    array2string,
    value2name
  },
  data () {
    return {
      showValue: false,
			tempValue: getObject(this.value),
			currentValue: this.value,
			currentData: JSON.stringify(this.data)
    }
  },
  methods: {
    onHide (type) {
      this.showValue = false
      if (type) {
        this.currentValue = getObject(this.tempValue)
        let newVal = {
          value: this.currentValue,
          name: value2name(this.currentValue, this.data)
        }
        console.info(newVal)
        //点击确认时调用
        this.$emit('on-confirm', newVal)
      }
      if (!type) {
        if (this.value.length > 0) {
          this.tempValue = getObject(this.currentValue)
        }
      }
    },
    onPickerChange (val) {
      console.info('change picker')
      if (JSON.stringify(this.currentValue) !== JSON.stringify(val)) {
        // if has value, replace it
        if (this.value.length) {
          const nowData = JSON.stringify(this.data)
          if (nowData !== this.currentData && this.currentData !== '[]') {
            this.tempValue = getObject(val)
          }
          this.currentData = nowData
        } else { // if no value, stay quiet
          // if set to auto update, do update the value
        }
      }
      this.$emit('on-shadow-change', getObject(val))
    },
    closeModel () {
			if (this.value.length > 0) {
				this.tempValue = getObject(this.currentValue)
			}
    }
  },
  watch: {
    value (val) {
      if (JSON.stringify(val) !== JSON.stringify(this.tempValue)) {
        this.tempValue = getObject(val)
      }
    },
    currentValue (val) {
      this.$emit('on-change', getObject(val))
      this.$emit('input', getObject(val))
    }
  },
  components: {
    DxModal,
    Flexbox,
    FlexboxItem,
    Picker
  }
}
</script>

<style lang="scss" scoped>
.dx-picker-header {
  height: 44px;
  color: #434343;
  font-size: 16px;
}
.vux-popup-picker-header-menu {
  text-align: left;
  padding-left: 15px;
  line-height: 44px;
}
.vux-popup-picker-header-menu-right {
  text-align: right;
  padding-right: 15px;
}
</style>
