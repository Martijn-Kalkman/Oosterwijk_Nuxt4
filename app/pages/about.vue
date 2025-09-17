<template>
  <div class="min-h-screen text-black">
    <main>
      <!-- Hero Section -->
      <section class="py-16 lg:py-24">
        <UiContainer size="lg">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <!-- Content -->
            <div class="animate-slide-up">
              <h1
                class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight"
              >
                Vakmanschap met
                <span class="text-primary">persoonlijke</span> aandacht
              </h1>

              <p class="text-lg lg:text-xl mb-8 leading-relaxed">
                Met meer dan 10 jaar ervaring in het vak combineer ik traditioneel 
                vakmanschap met moderne technieken. Elke klus wordt aangepakt met 
                dezelfde toewijding en precisie, of het nu gaat om een kleine 
                reparatie of een complete renovatie.
              </p>

              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink to="/contact">
                  <UiButton variant="primary" size="lg" icon="mdi:phone">
                    Neem contact op
                  </UiButton>
                </NuxtLink>

                <NuxtLink to="/diensten">
                  <UiButton variant="accent" size="lg" icon="mdi:eye">
                    Bekijk diensten
                  </UiButton>
                </NuxtLink>
              </div>
            </div>

            <!-- Image -->
            <div class="relative">
              <NuxtImg
                src="/persoonlijk.webp"
                alt="Persoonlijke werkwijze van Oosterwijk Onderhoud"
                class="w-full h-[500px] object-cover rounded-2xl"
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                format="webp"
                quality="90"
              />
              <!-- Decorative elements -->
              <div
                class="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 blur-xl"
              ></div>
              <div
                class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-xl"
              ></div>
            </div>
          </div>
        </UiContainer>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-16 bg-[#007cb0] lg:py-24">
        <UiContainer size="lg">
          <div class="text-center mb-16 animate-slide-up">
            <h2 class="text-3xl text-white lg:text-4xl font-bold mb-6">
              Waarom kiest u voor
              <span class="text-primary">Oosterwijk Onderhoud</span>?
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(feature, index) in features"
              :key="feature.title"
              class="group relative"
            >
              <!-- Card -->
              <div
                class="relative h-full bg-[#0C1C56]/50 text-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-white hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <!-- Icon -->
                <div class="relative mb-6">
                  <div
                    class="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon :name="feature.icon" class="w-8 h-8 text-primary" />
                  </div>
                </div>

                <!-- Content -->
                <h3
                  class="text-xl font-bold mb-4  group-hover:text-primary transition-colors"
                >
                  {{ feature.title }}
                </h3>
                <p class=" leading-relaxed">
                  {{ feature.description }}
                </p>

                <!-- Number badge -->
                <div
                  class="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center"
                >
                  <span class="text-sm font-bold text-primary">{{
                    index + 1
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </UiContainer>
      </section>

      <!-- CTA Section -->
      <section class="py-16 lg:py-24">
        <UiContainer size="md">
          <Cta
  title="Klaar om te beginnen?"
  subtitle="Neem contact op voor een vrijblijvende offerte."
  :firstButton="{
    tag: 'NuxtLink',
    to: '/contact',
    variant: 'accent',
    size: 'lg',
    icon: 'mdi:calendar',
    label: 'Plan een afspraak'
  }"
  :secondButton="{
    tag: 'a',
    href: 'tel:+31123456',
    variant: 'outline',
    size: 'lg',
    icon: 'mdi:phone',
    label: 'Bel direct'
  }"
/>
        </UiContainer>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: "10+ jaar vakmanschap",
    description: "Decennialange ervaring in alle aspecten van schilderwerk en houtrenovatie.",
    icon: "mdi:award",
  },
  {
    title: "Kwaliteitsgarantie",
    description: "Alleen de beste materialen en vakkundige uitvoering voor duurzaam resultaat.",
    icon: "mdi:star",
  },
  {
    title: "Transparante prijzen",
    description: "Eerlijke, duidelijke offertes zonder verborgen kosten of verrassingen.",
    icon: "mdi:calculator",
  },
  {
    title: "Persoonlijke aanpak",
    description: "Elk project wordt aangepakt volgens uw specifieke wensen en behoeften.",
    icon: "mdi:account-group",
  },
  {
    title: "Gratis offerte",
    description: "Vrijblijvende offerte op locatie zonder enige verplichting.",
    icon: "mdi:file-document",
  },
  {
    title: "Lokale specialist",
    description: "Actief in de regio met snelle service en persoonlijke aandacht.",
    icon: "mdi:map-marker",
  },
];

// SEO Meta
useHead({
  title: "Over Oosterwijk Onderhoud - Vakman met 10+ Jaar Ervaring",
  meta: [
    {
      name: "description",
      content:
        "Ontdek het verhaal achter Oosterwijk Onderhoud. Meer dan 10 jaar vakmanschap in schilderwerk, houtrenovatie en behangwerk. Persoonlijke service en transparante prijzen.",
    },
    {
      name: "keywords",
      content:
        "over oosterwijk onderhoud, schilder ervaring, vakman schilderwerk, persoonlijke service schilder",
    },
  ],
});
</script>
