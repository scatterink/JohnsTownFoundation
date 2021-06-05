<template>
  <base-section
    id="merch-features"
  >
    <v-img
      :src="require('@/assets/logo.jpg')"
      class="mx-auto mb-8"
      max-width="200"
    />

    <base-section-heading title="Merch Shop">
      Thank you for visiting our<strong>Merchandise Store</strong> <br>100% profit goes to the foundation in order to financing various community projects.
    </base-section-heading>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionMerch',

    data: () => ({
      features: [
        ['Components', 5, '40+'],
        ['Example Pages', 3, '10+'],
        ['Vue CLI Support', true, true],
        ['Bugfixes and Issues', false, true],
        ['6 Months Free Updates', false, true],
        ['Supports Vuetify', false, true],
        ['Price', 'Free', '$59'],
      ],
    }),
  }
</script>
