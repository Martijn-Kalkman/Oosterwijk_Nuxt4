<template>
  <component
    :is="tag"
    v-bind="attrs"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <Icon
      v-if="icon && iconPosition === 'left'"
      :name="icon"
      :class="iconClasses"
    />
    <span v-if="$slots.default"><slot /></span>
    <Icon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
      :class="iconClasses"
    />
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

defineOptions({ inheritAttrs: false });

interface Props {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  tag?: "button" | "NuxtLink" | "a";
  to?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  tag: "button",
  type: "button",
  iconPosition: "left",
  fullWidth: false,
});

const attrs = useAttrs();

const emit = defineEmits<{
  click: [event: Event];
}>();

const buttonClasses = computed(() => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-[#007cb0] hover:bg-[#007cb0]/90 text-primary-foreground focus:ring-primary",
    secondary:
      "bg-[#4a5056] hover:bg-[#4a5056]/80 text-secondary-foreground border border-border",
    accent:
      "bg-[#007cb0] text-black hover:bg-[#007cb0]/80 text-accent-foreground focus:ring-accent",
    outline: "border border-white text-white hover:bg-slate-200 ",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
    xl: "px-8 py-5 text-xl",
  };

  const widthClass = props.fullWidth ? "w-full" : "";

  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    widthClass,
  ]
    .filter(Boolean)
    .join(" ");
});

const iconClasses = computed(() => {
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
  };

  const marginClass = props.iconPosition === "left" ? "mr-2" : "ml-2";

  return `${sizeMap[props.size]} ${marginClass}`;
});

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>
