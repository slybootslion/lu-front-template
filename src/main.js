import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './assets/style/index.scss'
import router from './router'
import { pinia } from './store'

import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
