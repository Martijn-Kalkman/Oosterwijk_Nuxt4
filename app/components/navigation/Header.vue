<template>
  <header class="relative">
    <!-- Navigation Bar -->
    <nav class="bg-[#dfcfb4] text-black shadow-lg relative z-20">
      <UiContainer>
        <div
          class="flex max-w-7xl px-4 mx-auto items-center justify-between py-4"
        >
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img
              src="/logo.png"
              alt="Oosterwijk Onderhoud Logo"
              class="w-32 sm:w-40 md:w-48 lg:w-60 rounded transition-transform hover:scale-105"
              loading="eager"
            />
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav
            class="hidden md:flex space-x-8 text-lg font-medium"
            role="navigation"
          >
            <NuxtLink to="/" class="nav-link" active-class="nav-link-active">
              Home
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="nav-link"
              active-class="nav-link-active"
            >
              Over mij
            </NuxtLink>
            <NuxtLink
              to="/diensten"
              class="nav-link"
              active-class="nav-link-active"
            >
              Diensten
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="nav-link"
              active-class="nav-link-active"
            >
              Contact
            </NuxtLink>
          </nav>

          <!-- Contact Info (Desktop) -->
          <div
            class="hidden lg:flex items-center space-x-6 text-sm font-medium"
          >
            <a
              href="tel:+31123456"
              class="flex items-center hover:text-accent transition-colors"
              aria-label="Bel ons"
            >
              <Icon name="mdi:phone" class="w-5 h-5 mr-2" />
              +31 123456
            </a>
            <a
              href="mailto:email@example.com"
              class="flex items-center hover:text-accent transition-colors"
              aria-label="Email ons"
            >
              <Icon name="mdi:email" class="w-5 h-5 mr-2" />
              email@example.com
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden p-2"
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <Icon
              v-if="!isMobileMenuOpen"
              name="mdi:menu"
              class="w-7 h-7 text-black"
            />
            <Icon v-else name="mdi:close" class="w-7 h-7 text-black" />
          </button>
        </div>
      </UiContainer>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black/50 z-40"
        @click="closeMobileMenu"
      ></div>
    </Transition>

    <!-- Mobile Drawer -->
    <Transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-[#dfcfb4] shadow-lg z-50 flex flex-col p-6"
      >
        <!-- Close Button (inside drawer for extra accessibility) -->
        <div class="flex justify-end">
          <button
            @click="closeMobileMenu"
            class="text-black hover:text-accent transition-colors"
            aria-label="Sluit menu"
          >
            <Icon name="mdi:close" class="w-7 h-7" />
          </button>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-col mt-8 space-y-6 text-lg font-medium">
          <NuxtLink
            v-for="link in navigationLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            active-class="nav-link-active"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Contact Info -->
        <div class="mt-auto space-y-4 text-sm border-t border-black/20 pt-4">
          <a
            href="tel:+31123456"
            class="flex items-center hover:text-accent transition-colors"
          >
            <Icon name="mdi:phone" class="w-5 h-5 mr-2" />
            +31 123456
          </a>
          <a
            href="mailto:email@example.com"
            class="flex items-center hover:text-accent transition-colors"
          >
            <Icon name="mdi:email" class="w-5 h-5 mr-2" />
            email@example.com
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Over mij" },
  { to: "/diensten", label: "Diensten" },
  { to: "/contact", label: "Contact" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 2px;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: #000;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #000;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link-active {
  font-weight: 600;
  color: #000;
}

.nav-link-active::after {
  width: 100%;
}
</style>
