<template>
  <base-section
    id="school-heading"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SchoolHeading',

    data: () => ({
      cards: [
        {
          icon: 'mdi-bulletin-board',
          title: 'Bulletin',
          text: '',
        },
        {
          icon: 'mdi-image-multiple-outline',
          title: 'Gallary',
          text: '',
        },
        {
          icon: 'mdi-human-male-board',
          title: 'Administration',
          text: '',
        },
        {
          icon: 'mdi-school',
          title: 'About',
          text: '',
        },
      ],
    }),
  }
</script>
