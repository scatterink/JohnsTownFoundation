
<template>
  <base-section
    id="project-feature"
  >
    <v-img
      :src="require('@/assets/logo.jpg')"
      class="mx-auto mb-8"
      max-width="200"
    />

    <base-section-heading title="Projects">
      Below is a list of all our projects and there status.
    </base-section-heading>
  </base-section>
</template>

<script>
  export default {
    name: 'ProjectFeature',

  }
</script>
