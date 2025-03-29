// src/global-components.d.ts
import { ComponentPublicInstance } from 'vue'
import BaseButton from './components/common/BaseButton.vue'
import BaseTypography from './components/common/BaseTypography.vue'
import BaseCard from './components/common/BaseCard.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton
    BaseTypography: typeof BaseTypography
    BaseCard: typeof BaseCard
  }
}

export {}
