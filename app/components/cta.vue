<!-- components/CallToAction.vue -->
<template>
  <div class="text-center rounded-3xl p-12 lg:p-4 relative overflow-hidden">
    <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-black">
      {{ title }}
    </h2>
    <p class="text-lg text-black/90 mb-8 max-w-2xl mx-auto">
      {{ subtitle }}
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <!-- First Button -->
      <UiButton
        :tag="'NuxtLink'"
        :to="firstButton.to"
        :variant="firstButton.variant"
        :size="firstButton.size"
        :icon="firstButton.icon"
      >
        {{ firstButton.label }}
      </UiButton>

      <!-- Second Button -->
      <UiButton
        :tag="secondButton.tag"
        :href="secondButton.href"
        :variant="secondButton.variant"
        :size="secondButton.size"
        :icon="secondButton.icon"
        class="border-black/30 text-black hover:text-slate-700 hover:bg-black/10"
      >
        {{ secondButton.label }}
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ButtonConfig {
  tag?: "button" | "NuxtLink" | "a";
  to?: string;
  href?: string;
  variant: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: string;
  label: string;
}

interface Props {
  title: string;
  subtitle: string;
  firstButton: ButtonConfig;
  secondButton: ButtonConfig;
}

defineProps<Props>();
</script>
