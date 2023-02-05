
	import App from './App'
	
	// #ifndef VUE3
	import Vue from 'vue'
	import copy from 'js/copy.js'
	import go from 'script/ego.js'
	Vue.config.productionTip = false
	App.mpType = 'app'
	Vue.prototype.copy = copy
	Vue.prototype.go = go
	var date = new Date()

	const app = new Vue({
	    ...App
	})
	app.$mount()
	
	// #endif
	
	// #ifdef VUE3
	import { createSSRApp } from 'vue'
	export function createApp() {
	  const app = createSSRApp(App)
	  return {
	    app
	  }
	}
	// #endif