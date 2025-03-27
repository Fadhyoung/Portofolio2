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

<script>
export default {
  props: {
    label: String,
    startIcon: String,
    endIcon: String,
    icon: String,
    buttonType: { type: String, default: 'solid' },
    size: { type: String, default: 'sm' },
    variant: { type: String, default: 'primary' },
    radius: { type: String, default: 'xs' },
    isLoading: Boolean,
    loadingPosition: { type: String, default: 'right' },
    labelLoading: { type: String, default: 'Loading...' },
    visibleOn: { type: String, default: 'all' },
    disabled: Boolean,
  },
  computed: {
    buttonClasses() {
      return [
        'inline-flex items-center justify-center font-medium focus:outline-none transition-all cursor-pointer',
        this.buttonTypeStyles[this.buttonType],
        this.sizeStyles[this.size],
        this.radiusStyles[this.radius],
        this.visibleOnClasses[this.visibleOn],
        this.disabled || this.isLoading ? 'opacity-50 cursor-not-allowed' : '',
      ]
    },
    buttonTypeStyles() {
      return {
        solid: this.variantStyles[this.variant],
        outline: 'border border-amber bg-transparent',
        subtle: `${this.variantStyles[this.variant]} bg-opacity-50`,
        ghost: 'bg-transparent',
        link: 'bg-transparent underline p-0',
        icon: 'p-2 rounded-full',
        elevated: `${this.variantStyles[this.variant]} shadow-md hover:shadow-lg`,
        clicked: `${this.variantStyles[this.variant]} border border-midBlue shadow-md hover:shadow-lg`,
      }
    },
    variantStyles() {
      return {
        primary: 'bg-white text-black',
        secondary: 'bg-primaryGreen text-white',
        tertiary: 'bg-secondaryGreen',
        danger: 'bg-red-600',
        default: 'bg-gray-200',
      }
    },
    sizeStyles() {
      return {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg',
        xl: 'px-8 py-5 text-xl',
      }
    },
    radiusStyles() {
      return {
        none: 'rounded-none',
        xs: 'rounded-sm',
        sm: 'rounded',
        md: 'rounded-md',
        xl: 'rounded-xl',
        full: 'rounded-full',
      }
    },
    visibleOnClasses() {
      return {
        'mobile-only': 'md:hidden flex',
        'desktop-only': 'hidden md:flex',
        all: 'block',
      }
    },
  },
}
</script>

<style scoped>
/* Add additional styling if needed */
</style>
