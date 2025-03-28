import '@/assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './components/common/BaseButton.vue'
import BaseTypography from './components/common/BaseTypography.vue'
import BaseCard from './components/common/BaseCard.vue'

import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.component('BaseButton', BaseButton)
app.component('BaseTypography', BaseTypography)
app.component('BaseCard', BaseCard)
app.mount('#app')
