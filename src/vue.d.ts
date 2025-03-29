// src/vue.d.ts
import 'vue'
import { I18n } from 'vue-i18n'

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: typeof I18n.prototype.global.t
  }
}
