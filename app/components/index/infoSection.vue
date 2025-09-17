<template>
  <section :class="['py-12 max-w-6xl px-6 mx-auto lg:py-16', backgroundColor]">
    <UiContainer>
      <div
        :class="[
          'flex items-center',
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row',
          'flex-col gap-8 lg:gap-12',
        ]"
      >
        <div
          class="w-full lg:w-5/12 flex justify-center"
          :class="imageAlignmentClass"
        >
          <div class="relative group">
            <NuxtImg
              v-if="imageSrc"
              :src="imageSrc"
              :alt="imageAlt || title"
              :class="[
                'rounded-xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105',
                imageClass,
              ]"
              :style="imageStyles"
              :loading="eager ? 'eager' : 'lazy'"
              sizes="(max-width: 768px) 100vw, 50vw"
              format="webp"
              quality="85"
            />
          </div>
        </div>

        <div class="w-full lg:w-7/12 space-y-6">
          <div class="animate-slide-up">
            <h2
              :class="[
                'font-bold mb-4 leading-tight',
                titleSize === 'sm'
                  ? 'text-xl lg:text-2xl'
                  : titleSize === 'lg'
                  ? 'text-2xl lg:text-4xl'
                  : 'text-xl lg:text-3xl',
                titleColor,
              ]"
            >
              {{ title }}
            </h2>

            <div
              :class="[
                'prose prose-lg max-w-none',
                contentColor,
                'prose-p:leading-relaxed prose-p:mb-4',
              ]"
            >
              <p v-if="content">{{ content }}</p>
              <slot v-else />
            </div>

            <div v-if="ctaText && ctaLink" class="mt-6">
              <UiButton
                :tag="ctaExternal ? 'a' : 'NuxtLink'"
                :to="ctaExternal ? undefined : ctaLink"
                :href="ctaExternal ? ctaLink : undefined"
                :variant="ctaVariant"
                :size="ctaSize"
              >
                {{ ctaText }}
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  title: string;
  content?: string;
  imageSrc: string;
  imageAlt?: string;
  imageClass?: string;
  reverse?: boolean;
  imageWidth?: string;
  imageHeight?: string;
  imageAlign?: "left" | "center" | "right";
  titleSize?: "sm" | "md" | "lg";
  titleColor?: string;
  contentColor?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaVariant?: "primary" | "secondary" | "accent" | "outline";
  ctaSize?: "sm" | "md" | "lg" | "xl";
  ctaExternal?: boolean;
  eager?: boolean;
  backgroundColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
  imageWidth: "100%",
  imageHeight: "400px",
  imageAlign: "center",
  titleSize: "md",
  titleColor: "text-foreground",
  contentColor: "text-foreground/90",
  ctaVariant: "primary",
  ctaSize: "md",
  ctaExternal: false,
  eager: false,
  backgroundColor: "#",
});

const imageStyles = computed(() => ({
  width: props.imageWidth,
  height: props.imageHeight,
}));

const imageAlignmentClass = computed(() => {
  const alignmentMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
  return alignmentMap[props.imageAlign];
});
</script>
