import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    id,
    en,
  },
})

export default i18n
