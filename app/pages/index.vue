<template>
  <div class="min-h-screen bg-[#dfcfb4] text-black">
    <div class="bg-cover bg-center bg-fixed min-h-screen">
      <div class="bg-[#383e42]/10 min-h-screen">
        <!-- Main Content -->
        <main>
          <!-- Hero Section with Info -->
          <IndexInfoSection
            title="Professioneel schilderwerk met persoonlijke aandacht"
            content="Bij Oosterwijk Onderhoud staat kwaliteit en vakmanschap centraal. Met meer dan 10 jaar ervaring lever ik duurzaam schilderwerk voor binnen en buiten. Van strak sauswerk tot specialistisch lakwerk - elke klus wordt met precisie uitgevoerd. Ik behang uw wanden met hoogwaardig glasvlies- of glasweefselbehang voor een perfecte afwerking. Ook houtrenovatie behoort tot mijn specialiteiten: kozijnen, deurposten en trappen krijgen een nieuwe leven met watergedragen binnenlak. Uw tevredenheid is mijn garantie."
            image-src="/intro.webp"
            image-alt="Professioneel schilderwerk door Oosterwijk Onderhoud"
            :reverse="true"
            image-width="100%"
            image-height="400px"
            title-color="text-black"
            content-color="text-black"
            :eager="true"
          />

          <!-- Portfolio Section -->
          <section class="relative py-16 lg:py-24 bg-[#007cb0] overflow-hidden">
            <!-- Optional background texture or overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#007cb0] to-[#005d85] opacity-90"
            ></div>

            <div
              class="relative z-10 px-6 sm:px-10 lg:px-16 max-w-screen-2xl mx-auto"
            >
              <div class="text-center mb-16 animate-slide-up">
                <h2 class="text-3xl lg:text-4xl font-bold text-[#e9e0d2] mb-4">
                  Mijn Portfolio
                </h2>
                <p
                  class="max-w-3xl mx-auto text-[#e9e0d2]/90 text-lg leading-relaxed"
                >
                  Al meer dan een decennium verzorg ik vakmanschap van de hoogste kwaliteit. 
                  Mijn schildersbedrijf is gegroeid vanuit een diepe passie voor perfecte afwerkingen. 
                  Van moderne interieurs tot historische renovaties - elk project wordt met dezelfde 
                  toewijding en precisie aangepakt. Bekijk hier een selectie van mijn meest recente werk.
                </p>
              </div>

              <!-- Portfolio Grid -->
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              >
                <!-- Portfolio Items -->
                <div
                  v-for="(item, index) in portfolioItems"
                  :key="index"
                  class="relative group aspect-[4/5] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <NuxtImg
                    :src="item.image"
                    :alt="item.alt"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    format="webp"
                    quality="85"
                  />
                  <!-- Overlay -->
                  <div
                    class="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center"
                  >
                    <span
                      class="text-[#e9e0d2] text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {{ item.title }}
                    </span>
                  </div>
                </div>

                <!-- Call to Action Card -->
                <div
                  class="aspect-[4/5] bg-slate-950 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 text-center"
                >
                  <h3
                    class="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight"
                  >
                    Ontdek wat ik voor uw project kan betekenen
                  </h3>
                  <NuxtLink to="/diensten">
                    <UiButton
                      tag="NuxtLink"
                      to="/diensten"
                      variant="accent"
                      size="lg"
                      full-width
                    >
                      Ontdek mijn diensten
                    </UiButton>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </section>

          <!-- Personal Approach Section -->
          <IndexInfoSection
            title="Transparante communicatie en persoonlijke service"
            content="Mijn werkwijze kenmerkt zich door openheid en persoonlijke aandacht. Vanaf het eerste contact tot de laatste afwerking houd ik u volledig op de hoogte. Na een kosteloze offerte op locatie bespreken we samen alle mogelijkheden, materialen en planning. U weet precies wat u kunt verwachten qua kosten, tijdsduur en resultaat. Geen verrassingen, geen verborgen kosten - alleen eerlijke, professionele service die uw vertrouwen verdient."
            image-src="/persoonlijk.webp"
            image-alt="Persoonlijke service van Oosterwijk Onderhoud"
            image-width="100%"
            image-height="400px"
            title-color="text-black"
            content-color="text-black/90"
          />

          <!-- Work Process Section -->
          <WorkProcess />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const portfolioItems = [
  {
    image: "/banner.webp",
    alt: "Moderne interieur renovatie",
    title: "Moderne Interieur",
  },
  {
    image: "/banner.webp",
    alt: "Historische houtrenovatie",
    title: "Houtrenovatie",
  },
  {
    image: "/intro.webp",
    alt: "Professioneel sauswerk",
    title: "Sauswerk",
  },
];

// SEO Meta
useHead({
  title: "Oosterwijk Onderhoud - Vakmanschap in Schilderwerk | 10+ Jaar Ervaring",
  meta: [
    {
      name: "description",
      content:
        "Professionele schilderdiensten door Oosterwijk Onderhoud. Specialist in sauswerk, lakwerk, houtrenovatie en behangwerk. Meer dan 10 jaar ervaring in Bergen op Zoom, Rotterdam, Goes en omgeving. Gratis offerte!",
    },
    {
      name: "keywords",
      content:
        "schilder Bergen op Zoom, schilderwerk Rotterdam, lakwerk Goes, houtrenovatie Breda, sauswerk, behangwerk, professioneel schilder, gratis offerte",
    },
    {
      property: "og:title",
      content: "Oosterwijk Onderhoud - Vakmanschap in Schilderwerk"
    },
    {
      property: "og:description", 
      content: "Professionele schilderdiensten met meer dan 10 jaar ervaring. Specialist in sauswerk, lakwerk en houtrenovatie."
    },
    {
      property: "og:type",
      content: "website"
    }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Oosterwijk Onderhoud",
        "description": "Professionele schilderdiensten met meer dan 10 jaar ervaring. Specialist in sauswerk, lakwerk, houtrenovatie en behangwerk.",
        "url": "https://oosterwijkonderhoud.nl",
        "telephone": "+31 6 1234 5678",
        "email": "info@oosterwijkonderhoud.nl",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bergen op Zoom",
          "addressCountry": "NL"
        },
        "areaServed": [
          "Bergen op Zoom",
          "Rotterdam",
          "Goes",
          "Breda",
          "Tholen"
        ],
        "serviceType": [
          "Schilderwerk",
          "Sauswerk",
          "Lakwerk",
          "Behangwerk",
          "Houtrenovatie",
          "Spuitwerk"
        ],
        "foundingDate": "2014",
        "priceRange": "€€",
        "openingHours": "Mo-Fr 08:00-17:00",
        "image": "https://oosterwijkonderhoud.nl/logo.webp",
        "logo": "https://oosterwijkonderhoud.nl/logo.webp"
      })
    }
  ]
});
</script>
