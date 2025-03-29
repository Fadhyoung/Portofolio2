<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || isLoading"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <!-- Loading Icon (Left) -->
    <span v-if="isLoading && loadingPosition === 'left'" class="mr-2 animate-spin">🔄</span>

    <!-- Start Icon -->
    <span v-if="!icon && startIcon" class="mr-2">
      <slot name="start-icon">{{ startIcon }}</slot>
    </span>

    <!-- Main Icon -->
    <span v-if="icon">
      <slot name="icon">{{ icon }}</slot>
    </span>

    <!-- Button Label -->
    <span v-else>
      <slot>{{ isLoading ? labelLoading : label }}</slot>
    </span>

    <!-- End Icon -->
    <span v-if="!icon && endIcon" class="ml-2">
      <slot name="end-icon">{{ endIcon }}</slot>
    </span>

    <!-- Loading Icon (Right) -->
    <span v-if="isLoading && loadingPosition === 'right'" class="ml-2 animate-spin">🔄</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define prop types
type ButtonType =
  | 'solid'
  | 'outline'
  | 'subtle'
  | 'ghost'
  | 'link'
  | 'icon'
  | 'elevated'
  | 'clicked'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'default'
type ButtonRadius = 'none' | 'xs' | 'sm' | 'md' | 'xl' | 'full'
type LoadingPosition = 'left' | 'right'
type Visibility = 'all' | 'mobile-only' | 'desktop-only'

// Define props with TypeScript
const props = withDefaults(
  defineProps<{
    label?: string
    startIcon?: string
    endIcon?: string
    icon?: string
    buttonType?: ButtonType
    size?: ButtonSize
    variant?: ButtonVariant
    radius?: ButtonRadius
    isLoading?: boolean
    loadingPosition?: LoadingPosition
    labelLoading?: string
    visibleOn?: Visibility
    disabled?: boolean
  }>(),
  {
    buttonType: 'solid',
    size: 'sm',
    variant: 'primary',
    radius: 'xs',
    isLoading: false,
    loadingPosition: 'right',
    labelLoading: 'Loading...',
    visibleOn: 'all',
    disabled: false,
  },
)

// Reactive styles
const variantStyles = computed(() => ({
  primary: 'bg-white text-black',
  secondary: 'bg-darkBlue text-white',
  tertiary: 'bg-secondaryGreen',
  danger: 'bg-red-600',
  default: 'bg-gray-200',
}))

const buttonTypeStyles = computed(() => ({
  solid: variantStyles.value[props.variant],
  outline: 'border border-amber bg-transparent',
  subtle: `${variantStyles.value[props.variant]} bg-opacity-50`,
  ghost: `${variantStyles.value[props.variant]} bg-transparent`,
  link: 'bg-transparent underline p-0',
  icon: 'p-2 rounded-full',
  elevated: `${variantStyles.value[props.variant]} shadow-md hover:shadow-lg`,
  clicked: `${variantStyles.value[props.variant]} border border-midBlue shadow-md hover:shadow-lg`,
}))

const sizeStyles = computed(() => ({
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
  xl: 'px-8 py-5 text-xl',
}))

const radiusStyles = computed(() => ({
  none: 'rounded-none',
  xs: 'rounded-sm',
  sm: 'rounded',
  md: 'rounded-md',
  xl: 'rounded-xl',
  full: 'rounded-full',
}))

const visibleOnClasses = computed(() => ({
  'mobile-only': 'md:hidden flex',
  'desktop-only': 'hidden md:flex',
  all: 'block',
}))

// Compute button classes dynamically
const buttonClasses = computed(() => [
  'inline-flex items-center justify-center font-medium focus:outline-none transition-all cursor-pointer',
  buttonTypeStyles.value[props.buttonType] || '',
  sizeStyles.value[props.size] || '',
  radiusStyles.value[props.radius] || '',
  visibleOnClasses.value[props.visibleOn] || '',
  props.disabled || props.isLoading ? 'opacity-50 cursor-not-allowed' : '',
])
</script>

<style scoped>
/* Add additional styling if needed */
</style>
