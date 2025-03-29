<template>
  <component
    :is="tag"
    :id="id"
    :class="[variantClasses[variant], colorClasses[color], visibleOnClasses[visibleOn], className]"
    :style="{ fontWeight: weight, ...styles }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define types for props
type TypographyTag = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TypographyVariant = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
type TypographyColor = 'primary' | 'secondary' | 'tertiary' | 'amber'
type Visibility = 'mobile-only' | 'desktop-only' | 'all'

// Define props with TypeScript
const props = withDefaults(
  defineProps<{
    tag?: TypographyTag
    variant: TypographyVariant
    color?: TypographyColor
    weight?: string
    className?: string
    styles?: Record<string, string>
    visibleOn?: Visibility
    id?: string
  }>(),
  {
    tag: 'p',
    color: 'primary',
    visibleOn: 'all',
  },
)

// Define computed classes
const variantClasses = computed(() => ({
  '2xs': 'lg:text-[10px] xs:text-[6px]',
  xs: 'lg:text-[12px] xs:text-[8px]',
  sm: 'lg:text-[14px] xs:text-[10px]',
  md: 'lg:text-[16px] xs:text-[12px]',
  lg: 'lg:text-[20px] xs:text-[16px]',
  xl: 'lg:text-[24px] xs:text-[20px]',
  '2xl': 'lg:text-[30px] xs:text-[24px]',
  '3xl': 'lg:text-[34px] xs:text-[24px]',
  '4xl': 'lg:text-[60px] xs:text-[34px]',
}))

const colorClasses = computed(() => ({
  primary: 'text-darkBlue',
  secondary: 'text-[#E0E0E0]',
  tertiary: 'text-midBlue',
  amber: 'text-amber',
}))

const visibleOnClasses = computed(() => ({
  'mobile-only': 'md:hidden flex',
  'desktop-only': 'hidden md:flex',
  all: 'flex',
}))
</script>
