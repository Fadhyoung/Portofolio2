import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Button from './components/common/Button.vue'

const app = createApp(App)

app.use(router)
app.component('Button', Button)
app.mount('#app')
