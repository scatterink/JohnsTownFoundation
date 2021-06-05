<template>
  <base-section
    id="project-heading"
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
    name: 'ProjectHeading',

    data: () => ({
      cards: [
        {
          icon: 'mdi-google-circles-extended',
          title: 'All',
          text: '',
        },
        {
          icon: 'mdi-account-group',
          title: 'Community Development',
          text: '',
        },
        {
          icon: 'mdi-book-open-variant',
          title: 'Education',
          text: '',
        },
        {
          icon: 'mdi-soccer',
          title: 'Sports & Entertainment',
          text: '',
        },

      ],
    }),
  }
</script>
