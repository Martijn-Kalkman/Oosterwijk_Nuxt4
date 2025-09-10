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
                Persoonlijke &
                <span class="text-primary">transparante</span> werkwijze
              </h1>

              <p class="text-lg lg:text-xl mb-8 leading-relaxed">
                Ik ben pas tevreden als u dat ook bent. Daarom stem ik mijn
                werkzaamheden precies af op uw wensen en lever ik altijd
                kwaliteit.
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
                alt="Persoonlijke werkwijze"
                class="w-full h-[500px] object-cover rounded-2xl "
                loading="eager"
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
              Waarom kiezen voor
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
    title: "10+ jaar ervaring",
    description: "Ruime ervaring in schilderwerk en houtrenovatie.",
    icon: "mdi:award",
  },
  {
    title: "Kwaliteitsgarantie",
    description: "Hoogwaardige materialen en vakkundig uitgevoerd werk.",
    icon: "mdi:star",
  },
  {
    title: "Transparante prijzen",
    description: "Duidelijke offertes zonder verrassingen achteraf.",
    icon: "mdi:calculator",
  },
  {
    title: "Persoonlijke service",
    description: "Ik luister naar uw wensen en werk op maat.",
    icon: "mdi:account-group",
  },
  {
    title: "Gratis offerte",
    description: "Vrijblijvende offerte zonder verplichtingen.",
    icon: "mdi:file-document",
  },
  {
    title: "Lokaal bedrijf",
    description: "Actief in de regio met snelle service.",
    icon: "mdi:map-marker",
  },
];

// SEO Meta
useHead({
  title: "Over Mij - Oosterwijk Onderhoud",
  meta: [
    {
      name: "description",
      content:
        "Leer meer over Oosterwijk Onderhoud. Meer dan 10 jaar ervaring in professioneel schilderwerk met persoonlijke service en transparante prijzen.",
    },
  ],
});
</script>
