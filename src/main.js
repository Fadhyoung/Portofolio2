import '@/assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Button from './components/common/Button.vue'
import Typography from './components/common/Typography.vue'

import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.component('Button', Button)
app.component('Typography', Typography)
app.mount('#app')
