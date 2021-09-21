import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// const app = createApp(App)
// app.use(router)
// app.use(store)
// // 全局注册directive
// // app.directive('custom', customDirective)
// app.mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')
