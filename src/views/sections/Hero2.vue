<template>
  <section
    id="hero2"
    class="mt-1"
  >
    <v-img
      id="img1"
      :min-height="minHeight"
      :src="require('@/assets/light.jpg')"
      class="white--text relative flexible"
      gradient="to bottom, rgba(208, 245, 255, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading
            size="text-h5"
            title="WELCOME TO OUR COMMUNITY PAGE"
            weight="medium"
            class="text-center relative"
          />
          <base-subheading
            size="text-h6"
            weight="regular"
            title="GROWING STRONGER TOGETHER"
            class="text-center relative"
          />
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
  /*  */
</script>
<style>
.v-application .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
    margin-top: 325px;
}

</style>
