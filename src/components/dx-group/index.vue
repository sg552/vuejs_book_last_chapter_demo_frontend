<template>
  <div class="dx-group-box">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.dx-group-box {
  position: relative;
  margin-top: 36px;
  font-size: 17px;
}

.dx-group-box:after{
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
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  computed () {
  },
  methods: {
  },
  components: {
  }
}
</script>
