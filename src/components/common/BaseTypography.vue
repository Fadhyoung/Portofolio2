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

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    variant: {
      type: String,
      required: true,
      validator: (val) => ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'].includes(val),
    },
    color: {
      type: String,
      default: 'primary',
      validator: (val) => ['primary', 'secondary', 'tertiary'].includes(val),
    },
    weight: String,
    className: String,
    styles: Object,
    visibleOn: {
      type: String,
      default: 'all',
      validator: (val) => ['mobile-only', 'desktop-only', 'all'].includes(val),
    },
    id: String,
  },
  computed: {
    variantClasses() {
      return {
        '2xs': 'lg:text-[10px] xs:text-[6px]',
        xs: 'lg:text-[12px] xs:text-[8px]',
        sm: 'lg:text-[14px] xs:text-[10px]',
        md: 'lg:text-[16px] xs:text-[12px]',
        lg: 'lg:text-[20px] xs:text-[16px]',
        xl: 'lg:text-[24px] xs:text-[20px]',
        '2xl': 'lg:text-[30px] xs:text-[24px]',
        '3xl': 'lg:text-[34px] xs:text-[24px]',
        '4xl': 'lg:text-[60px] xs:text-[34px]',
      }
    },
    colorClasses() {
      return {
        primary: 'text-darkBlue',
        secondary: 'text-[#E0E0E0]',
        tertiary: 'text-midBlue',
        amber: 'text-amber',
      }
    },
    visibleOnClasses() {
      return {
        'mobile-only': 'md:hidden flex',
        'desktop-only': 'hidden md:flex',
        all: 'flex',
      }
    },
  },
}
</script>
