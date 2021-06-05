<template>
  <base-section
    id="hero"
  >
    <v-img
      :src="require('@/assets/light.jpg')"
      class="mx-auto mb-8 mt-5"
      max-width="1200"
      max-height="400"
    />

    <base-section-heading title="WELCOME TO OUR COMMUNITY PAGE">
      <strong style="font-size:20px">Growing Stronger Together</strong>
      <div class="text-center">
        <base-btn
          class="mt-5"
          :tile="false"
          color="primary"
          href=""
          rounded
        >
          Donate

          <v-icon right>
            mdi-rocket
          </v-icon>
        </base-btn>
      </div>
    </base-section-heading>
  </base-section>
</template>
