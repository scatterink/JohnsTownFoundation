<template>
  <base-section
    id="gallery-features"
  >
    <v-img
      :src="require('@/assets/logo.jpg')"
      class="mx-auto mb-8"
      max-width="200"
    />

    <base-section-heading title="Gallery">
      See our <strong>Beautiful</strong> community in pictures <br>
    </base-section-heading>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionGallery',

  }
</script>
