import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './assets/style/index.scss'
import router from './router'
import { pinia } from './store'

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
