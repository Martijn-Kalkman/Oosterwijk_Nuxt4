<template>
  <div class="min-h-screen text-black">
    <main>
      <!-- Hero Section -->
      <section class="py-16 lg:py-20 text-black">
        <UiContainer size="lg">
          <div class="text-center animate-slide-up">
            <h1 class="text-4xl lg:text-5xl font-bold mb-6">Mijn Specialiteiten</h1>
            <p class="text-xl max-w-3xl mx-auto leading-relaxed">
              Van traditioneel vakmanschap tot moderne technieken - 
              elke dienst wordt uitgevoerd met dezelfde toewijding en precisie
            </p>
          </div>
        </UiContainer>
      </section>

      <!-- Services Grid -->
      <section class="py-12 bg-[#007CB0] lg:py-16">
        <UiContainer size="lg">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Main Services -->
            <div
              v-for="service in mainServices"
              :key="service.title"
              class="group bg-[#064C83] text-white backdrop-blur-sm rounded-2xl p-8 hover:bg-[#193c5f] hover:cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-black/10"
            >
              <div class="relative overflow-hidden rounded-xl mb-6">
                <NuxtImg
                  :src="service.image"
                  :alt="service.title"
                  class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  format="webp"
                  quality="85"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                />
                <div class="absolute bottom-4 left-4">
                  <div
                    class="w-12 h-12 bg-[#007CB0] rounded-full flex items-center justify-center"
                  >
                    <Icon :name="service.icon" class="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <h3 class="text-xl font-bold mb-3">
                {{ service.title }}
              </h3>
              <p class="text-white text-sm leading-relaxed mb-6">
                {{ service.description }}
              </p>
              <NuxtLink to="/contact">
                <UiButton
                  tag="NuxtLink"
                  to="/contact"
                  variant="accent"
                  size="sm"
                  class="w-full"
                >
                  Neem contact op!
                </UiButton>
              </NuxtLink>
            </div>
          </div>
        </UiContainer>
      </section>

      <!-- CTA Section -->
      <section class="py-16 lg:py-20">
        <Cta
          title="Klaar om te beginnen?"
          subtitle="Neem contact op voor een vrijblijvende offerte."
          :firstButton="{
            tag: 'NuxtLink',
            to: '/contact',
            variant: 'accent',
            size: 'lg',
            icon: 'mdi:calendar',
            label: 'Plan een afspraak',
          }"
          :secondButton="{
            tag: 'a',
            href: 'tel:+31123456',
            variant: 'outline',
            size: 'lg',
            icon: 'mdi:phone',
            label: 'Bel direct',
          }"
        />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const mainServices = [
  {
    title: "Sauswerk",
    description:
      "Strak sauswerk voor muren en plafonds met premium kwaliteit verf. Van voorstrijken tot eindafwerking - elke laag wordt met precisie aangebracht voor een duurzaam resultaat.",
    image: "/intro.webp",
    icon: "mdi:format-paint",
  },
  {
    title: "Lakwerk",
    description:
      "Vakkundig lakken van deuren, kozijnen, plinten en trappen. Watergedragen binnenlak voor een milieuvriendelijke en duurzame afwerking die jarenlang mooi blijft.",
    image: "/intro.webp",
    icon: "mdi:brush",
  },
  {
    title: "Behangwerk",
    description:
      "Professioneel behangen met glasvlies- of glasweefselbehang. Perfecte afwerking voor een strakke, moderne uitstraling die makkelijk te onderhouden is.",
    image: "/intro.webp",
    icon: "mdi:wallpaper",
  },
  {
    title: "Houtrenovatie",
    description: "Complete renovatie van kozijnen, deuren en houten elementen. Van schuren tot lakken - uw houtwerk krijgt een tweede leven met vakmanschap.",
    image: "/intro.webp",
    icon: "mdi:hammer",
  },
  {
    title: "Buitenschilderwerk",
    description: "Bescherming en verfraaiing van gevels en buitenwerk. Weerbestendige verf en technieken voor optimale bescherming tegen de elementen.",
    image: "/intro.webp",
    icon: "mdi:home",
  },
  {
    title: "Spuitwerk",
    description:
      "Efficiënt spuitwerk voor grote oppervlakten en moeilijk bereikbare plekken. Uniforme afwerking met moderne spuittechnieken voor professioneel resultaat.",
    image: "/intro.webp",
    icon: "mdi:spray",
  },
];

// SEO Meta
useHead({
  title: "Schilderdiensten - Sauswerk, Lakwerk & Houtrenovatie | Oosterwijk Onderhoud",
  meta: [
    {
      name: "description",
      content:
        "Ontdek onze specialiteiten: sauswerk, lakwerk, behangwerk, houtrenovatie en spuitwerk. Meer dan 10 jaar ervaring in Bergen op Zoom, Rotterdam, Goes en omgeving. Gratis offerte!",
    },
    {
      name: "keywords",
      content:
        "schilderdiensten, sauswerk, lakwerk, behangwerk, houtrenovatie, spuitwerk, schilder Bergen op Zoom, gratis offerte",
    },
  ],
});
</script>
