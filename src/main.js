import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './assets/style/index.scss'
import router from './router'
import { pinia } from './store'
import { initVarletUI } from './utils/varlet-ui'

const app = createApp(App)
initVarletUI(app)
app.use(router).use(pinia).mount('#app')

// https://varlet-varletjs.vercel.app/#/zh-CN/quickstart
