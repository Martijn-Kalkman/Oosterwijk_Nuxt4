<template>
  <div class="min-h-screen bg-background text-foreground">
    <main class="py-12 lg:py-16">
      <!-- Header -->
      <section class="py-12">
        <UiContainer size="lg">
          <div class="text-center">
            <h1 class="text-4xl lg:text-5xl text-black font-bold mb-6">
              Neem Contact Op
            </h1>
            <p
              class="text-lg text-black/80 max-w-2xl mx-auto"
            >
              Klaar om uw project te bespreken? Ik help u graag verder met een 
              vrijblijvende offerte en persoonlijk advies
            </p>
          </div>
        </UiContainer>
      </section>

      <!-- Contact Form & Info -->
      <section class="py-12">
        <UiContainer size="lg">
          <div class="grid grid-cols-1 text-black lg:grid-cols-2 gap-8 lg:gap-12">
            <!-- Contact Form -->
            <div
              class="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg"
            >
              <h2 class="text-2xl font-bold text-black mb-6">
                Stuur een bericht
              </h2>

              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label
                    for="fullname"
                    class="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Naam *
                  </label>
                  <input
                    id="fullname"
                    v-model="form.fullname"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:border-[#007CB0] focus:ring-2 focus:ring-[#007CB0]/20 focus:outline-none transition-all duration-200 placeholder-gray-500"
                    placeholder="Uw volledige naam"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-800 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:border-[#007CB0] focus:ring-2 focus:ring-[#007CB0]/20 focus:outline-none transition-all duration-200 placeholder-gray-500"
                    placeholder="uw.email@example.com"
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-semibold text-gray-800 mb-2">
                    Telefoon
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:border-[#007CB0] focus:ring-2 focus:ring-[#007CB0]/20 focus:outline-none transition-all duration-200 placeholder-gray-500"
                    placeholder="+31 6 12345678"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:border-[#007CB0] focus:ring-2 focus:ring-[#007CB0]/20 focus:outline-none transition-all duration-200 resize-vertical placeholder-gray-500"
                    placeholder="Vertel me over uw project, wensen en tijdsplanning..."
                  />
                </div>

                <UiButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  :disabled="isSubmitting"
                  full-width
                  class="text-white"
                  :aria-describedby="submitMessage ? 'submit-message' : undefined"
                >
                  {{ isSubmitting ? "Versturen..." : "Bericht versturen" }}
                </UiButton>

                <div v-if="submitMessage" class="text-center" id="submit-message" role="alert" aria-live="polite">
                  <p
                    :class="[
                      'font-medium',
                      submitMessage.type === 'success'
                        ? 'text-green-600'
                        : 'text-red-600',
                    ]"
                  >
                    {{ submitMessage.text }}
                  </p>
                </div>
              </form>
            </div>

            <!-- Contact Information -->
            <div class="space-y-6">
              <!-- Contact Details -->
              <div
                class="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg"
              >
                <h3 class="text-xl font-bold mb-6 text-black">Contactgegevens</h3>

                <div class="space-y-4">
                  <a
                    href="tel:+31123456"
                    class="flex items-center hover:text-[#007CB0] transition-colors group"
                  >
                    <Icon
                      name="lucide:phone"
                      class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform text-[#007CB0]"
                    />
                    <div>
                      <p class="font-medium text-gray-800">Telefoon</p>
                      <p class="text-gray-600">+31 6 1234 5678</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@oosterwijkonderhoud.nl"
                    class="flex items-center hover:text-[#007CB0] transition-colors group"
                  >
                    <Icon
                      name="lucide:mail"
                      class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform text-[#007CB0]"
                    />
                    <div>
                      <p class="font-medium text-gray-800">Email</p>
                      <p class="text-gray-600">info@oosterwijkonderhoud.nl</p>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Business Info -->
              <div
                class="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg"
              >
                <h3 class="text-xl font-bold mb-6 text-black">Bedrijfsgegevens</h3>

                <div class="space-y-3 text-gray-600">
                  <div class="flex justify-between">
                    <span>KVK:</span>
                    <span class="font-medium">12345678</span>
                  </div>
                  <div class="flex justify-between">
                    <span>BTW:</span>
                    <span class="font-medium">NL123456789B01</span>
                  </div>
                </div>
              </div>

              <!-- Service Area -->
              <div
                class="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg"
              >
                <h3 class="text-xl font-bold mb-6 text-black">Werkgebied</h3>

                <div class="space-y-2 text-gray-600">
                  <p>• Bergen op Zoom en omgeving</p>
                  <p>• Rotterdam en Rijnmond</p>
                  <p>• Goes en Zuid-Beveland</p>
                  <p>• Breda en omstreken</p>
                  <p>• Tholen en Sint Philipsland</p>
                </div>
              </div>
            </div>
          </div>
        </UiContainer>
      </section>

      <!-- Google Maps Section -->
      <section class="py-12">
        <UiContainer size="lg">
          <div class="bg-white rounded-2xl border border-gray-200 shadow-lg">
            <div class="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.123456789!2d4.2913!3d51.4952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c42c4c4c4c4c4c%3A0x1234567890abcdef!2sBergen%20op%20Zoom!5e0!3m2!1snl!2snl!4v1719234567890"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="rounded-xl"
              ></iframe>
            </div>
          </div>
        </UiContainer>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

// SEO Meta
useHead({
  title: "Contact - Gratis Offerte | Oosterwijk Onderhoud",
  meta: [
    {
      name: "description",
      content:
        "Neem contact op met Oosterwijk Onderhoud voor een gratis offerte. Telefoon: +31 6 1234 5678 of stuur een bericht via het contactformulier. Actief in Bergen op Zoom, Rotterdam, Goes en omgeving.",
    },
    {
      name: "keywords",
      content:
        "contact schilder, gratis offerte schilderwerk, schilder Bergen op Zoom, schilder Rotterdam, schilder Goes",
    },
  ],
});

interface ContactForm {
  fullname: string;
  email: string;
  phone: string;
  message: string;
}

interface SubmitMessage {
  type: "success" | "error";
  text: string;
}

const form = reactive<ContactForm>({
  fullname: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref<SubmitMessage | null>(null);

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = null;

  try {
    // Validate required fields
    if (!form.fullname.trim()) {
      throw new Error("Naam is verplicht");
    }
    if (!form.email.trim()) {
      throw new Error("Email is verplicht");
    }
    if (!form.message.trim()) {
      throw new Error("Bericht is verplicht");
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    submitMessage.value = {
      type: "success",
      text: "Bedankt voor uw bericht! Ik neem zo snel mogelijk contact met u op.",
    };

    // Reset form
    Object.keys(form).forEach((key) => {
      form[key as keyof ContactForm] = "";
    });
  } catch (error) {
    submitMessage.value = {
      type: "error",
      text:
        error instanceof Error
          ? error.message
          : "Er is een fout opgetreden. Probeer het opnieuw.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>