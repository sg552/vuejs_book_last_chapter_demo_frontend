module.exports = function (Vue, configs) {
  Vue.mixin({
    created: function () {
      this.$configs = configs
    }
  })
}
