import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function(el) {
        // Focus the element
        el.focus()
    }
})

Vue.directive('click-outside', (el, bindings, vnode) => {
    // el就是繫結指令的元素，bindings.expression就是動態引數這裡是hide，vnode是繫結指令的元素的虛擬節點，vnode.context就是節點所在的vm例項
    document.addEventListener('click', (e) => {
        // 點選的是 繫結指令元素麼 不是就執行函式
        if (!el.contains(e.target)) {
            let method = bindings.expression
            vnode.context[method]()
        }
    })
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')