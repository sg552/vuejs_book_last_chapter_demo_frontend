const BridgeMixin = {
  mounted () {
    this.setupWebViewJavascriptBridge(function(bridge) {
      // 隐藏菊花
      bridge.callHandler('loadingHide', null, function(response) {
      })
    })
  },
  methods: {
    setupWebViewJavascriptBridge(callback) {
      if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
      if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
      window.WVJBCallbacks = [callback];
      var WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'https://__bridge_loaded__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    }
  }
}

export {
  BridgeMixin
}

