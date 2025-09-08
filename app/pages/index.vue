<template>
  <div class="min-h-screen bg-[#dfcfb4] text-black">
    <div class="bg-cover bg-center bg-fixed min-h-screen">
      <div class="bg-[#383e42]/10 min-h-screen">
        <!-- Main Content -->
        <main>
          <!-- Hero Section with Info -->
          <IndexInfoSection
            title="Meer dan een schildersbedrijf"
            content="Uitmuntende kwaliteit is onze standaard. Of u nu een schilder zoekt voor binnen of buiten schilderwerk: ik lever altijd duurzame kwaliteit. Zo verzorg ik bijvoorbeeld ook uiterst strak sauswerk om extra lang van te genieten. Wilt u eens wat anders op de muur? Ik behang uw wanden met stevig glasvlies- of glasweefselbehang. Kunnen de muren nog een tijdje mee, maar stoort u zich aan de versleten kozijnen, deurposten of trappen in huis? Nadat ik het hout vakkundig opknap en afwerk met watergedragen binnenlak is het houtwerk weer als nieuw."
            image-src="/intro.jpg"
            image-alt="Professioneel schilderwerk"
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
                  Mijn Werk
                </h2>
                <p
                  class="max-w-3xl mx-auto text-[#e9e0d2]/90 text-lg leading-relaxed"
                >
                  Ruim 10 jaar Oosterwijk Onderhoud. Mijn schildersbedrijf is
                  ontstaan uit een passie voor secuur schilderwerk. Inmiddels
                  lever ik al meer dan 10 jaar onberispelijk schilderwerk,
                  houtrenovatie, spuitwerk en behangdiensten voor de scherpste
                  prijs.
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
                  <img
                    :src="item.image"
                    :alt="item.alt"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                    Laten we kijken wat ik voor je kan betekenen
                  </h3>
                  <NuxtLink to="/diensten">
                    <UiButton
                      tag="NuxtLink"
                      to="/diensten"
                      variant="accent"
                      size="lg"
                      full-width
                    >
                      Bekijk mijn diensten
                    </UiButton>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </section>

          <!-- Personal Approach Section -->
          <IndexInfoSection
            title="Persoonlijke & transparante werkwijze"
            content="Voor de verschillende diensten die ik aanbied, geldt altijd hetzelfde: ik ben pas tevreden als u dat ook bent. Daarom stem ik mijn werkzaamheden precies af op uw wensen. Nadat ik u een gratis offerte doe, kom ik langs op locatie. Ik examineer de situatie en adviseer u over de mogelijkheden. Samen bespreken we de uit te voeren werkzaamheden, de opties voor afwerking en uiteraard de planning. Zo weet u precies wat u kunt verwachten – ook als het op financiën aankomt."
            image-src="/persoonlijk.png"
            image-alt="Persoonlijke benadering"
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
    image: "/banner.jpg",
    alt: "Project 1",
    title: "Portfolio 1",
  },
  {
    image: "/bgpaint.png",
    alt: "Project 2",
    title: "Portfolio 2",
  },
  {
    image: "/intro.jpg",
    alt: "Project 3",
    title: "Portfolio 3",
  },
];

// SEO Meta
useHead({
  title: "Oosterwijk Onderhoud - Professionele Schilderdiensten",
  meta: [
    {
      name: "description",
      content:
        "Oosterwijk Onderhoud biedt professionele schilderdiensten, lakwerk en houtrenovatie. Meer dan 10 jaar ervaring in Bergen op Zoom, Rotterdam, Goes en omgeving.",
    },
    {
      name: "keywords",
      content:
        "schilder, schilderwerk, lakwerk, houtrenovatie, Bergen op Zoom, Rotterdam, Goes, Breda",
    },
  ],
});
</script>
