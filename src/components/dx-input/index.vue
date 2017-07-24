<template>
  <div class="dx-box">
     <div class="dx-cell">
       <div class="dx-cell-hd">
         <label>{{title}}</label>
       </div>
			 <div class="dx-cell-hd dx-cell-primary">
					<input
					v-if="!type || type === 'text'"
					type="text"
					:placeholder="placeholder"
					:readonly="readonly"
					v-model="currentValue"
					@focus="focusHandler"
					ref="input"/>
					<input
					v-if="type === 'number'"
					type="number"
					:placeholder="placeholder"
					:readonly="readonly"
					v-model="currentValue"
					@focus="focusHandler"
					ref="input"/>
					<input
					v-if="type === 'email'"
					type="email"
					:name="name"
					:placeholder="placeholder"
					:readonly="readonly"
					v-model="currentValue"
					@focus="focusHandler"
					ref="input"/>
					<input
					v-if="type === 'password'"
					type="password"
					:placeholder="placeholder"
					:readonly="readonly"
					v-model="currentValue"
					@focus="focusHandler"
					ref="input"/>
			 </div>
     </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/px2rem.scss";
@import "../../styles/dxstyles.scss";
</style>
<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: ''
    }
  },
  created () {
    this.currentValue = this.value || ''
  },
  mounted () {
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (newVal) {
      this.$emit('input', newVal)
    }
  },
  computed () {
  },
  methods: {
    focusHandler () {
      this.$emit('on-focus', this.currentValue)
    }
  },
  components: {
  }
}
</script>
