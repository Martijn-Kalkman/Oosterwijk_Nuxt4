<template>
  <footer class="bg-[#007CB0] border-t-2 border-white/20 mt-16 lg:mt-32">
    <UiContainer>
      <div class="py-8 lg:py-12 text-center lg:text-left">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
          <!-- Contact Section -->
          <div class="lg:col-span-1">
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">
              Contact
            </h3>
            <div class="space-y-4">
              <a
                href="tel:+31612345678"
                class="flex justify-center lg:justify-start items-center text-white hover:text-white/70 transition-colors group"
                aria-label="Bel ons"
              >
                <Icon
                  name="mdi:phone"
                  class="w-6 h-6 mr-3 group-hover:scale-110 transition-transform"
                />
                <span>+31 6 1234 5678</span>
              </a>
              <a
                href="mailto:info@oosterwijkonderhoud.nl"
                class="flex justify-center lg:justify-start items-center text-white hover:text-white/70 transition-colors group"
                aria-label="Email ons"
              >
                <Icon
                  name="mdi:email"
                  class="w-6 h-6 mr-3 group-hover:scale-110 transition-transform"
                />
                <span>info@oosterwijkonderhoud.nl</span>
              </a>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="lg:col-span-1">
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">
              Links
            </h3>
            <nav class="space-y-3">
              <NuxtLink
                v-for="link in navigationLinks"
                :key="link.to"
                :to="link.to"
                class="block text-white hover:text-white/70 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>

          <!-- Service Areas -->
          <div class="lg:col-span-1">
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">
              Regio
            </h3>
            <div class="space-y-2 text-white/90">
              <p>Bergen op Zoom</p>
              <p>Rotterdam & Rijnmond</p>
              <p>Goes & Zuid-Beveland</p>
              <p>Breda & omstreken</p>
              <p>Tholen & Sint Philipsland</p>
            </div>
          </div>

          <!-- Footer Image -->
          <div class="hidden lg:block lg:col-span-1 relative">
            <div class="absolute -top-20 right-0 w-80 h-80">
              <NuxtImg
                src="/footerimg.webp"
                alt="Oosterwijk Onderhoud schilderwerk"
                class="w-full h-full object-cover rounded-xl"
                loading="lazy"
                sizes="320px"
                format="webp"
                quality="85"
              />
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-12 pt-8 border-t border-white/20 text-center">
          <p class="text-white/80">
            © {{ currentYear }} Oosterwijk Onderhoud. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Over mij" },
  { to: "/diensten", label: "Diensten" },
  { to: "/contact", label: "Contact" },
];
</script>
