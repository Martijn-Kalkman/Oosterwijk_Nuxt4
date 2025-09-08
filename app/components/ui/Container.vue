<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "lg",
  padding: true,
});

const containerClasses = computed(() => {
  const baseClasses = "mx-auto";

  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  const paddingClass = props.padding ? "px-4 sm:px-6 lg:px-8" : "";

  return [baseClasses, sizeClasses[props.size], paddingClass]
    .filter(Boolean)
    .join(" ");
});
</script>
