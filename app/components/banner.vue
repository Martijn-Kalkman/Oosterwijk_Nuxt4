<template>
  <section class="relative">
    <Swiper
      :space-between="0"
      :centered-slides="true"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="[Autoplay, Pagination, Navigation]"
      class="hero-swiper h-[400px] sm:h-[500px] lg:h-[600px]"
    >
      <SwiperSlide class="relative">
        <!-- Image Container -->
        <div
          class="relative w-11/12 mx-auto mt-3 rounded-xl overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]"
        >
          <!-- Background Image -->
          <NuxtImg
            src="/banner.webp"
            alt="Professionele schilderdiensten"
            class="w-full h-full object-cover"
            loading="eager"
          />

          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"
          ></div>

          <!-- Text Content -->
          <div
            class="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 lg:px-20 text-white z-20"
          >
            <div class="max-w-3xl animate-slide-up">
              <h1
                class="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight drop-shadow-lg"
              >
                Ontdek mijn professionele diensten op maat
              </h1>
              <p
                class="text-base sm:text-lg lg:text-xl mb-6 max-w-2xl drop-shadow-md opacity-90"
              >
                Ik bied op maat gemaakte oplossingen die perfect aansluiten bij
                uw wensen en behoeften.
              </p>
              <UiButton
                tag="NuxtLink"
                to="/services"
                variant="accent"
                size="lg"
                class="shadow-lg"
              >
                Bekijk mijn diensten
              </UiButton>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
</script>
