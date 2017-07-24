<template>
  <div class="accordion-box">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.accordion-box {
  position: relative;
}

.accordion-box:after{
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #D9D9D9;
  color: #D9D9D9;
}

</style>
<script>
import { parentMixin } from '../../mixins/multi-items'

export default {
  mixins: [parentMixin]
}
</script>
