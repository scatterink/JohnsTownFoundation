<template>
  <base-section
    id="trade-heading"
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
    name: 'TradeHeading',

    data: () => ({
      cards: [
        {
          icon: 'mdi-google-circles-extended',
          title: 'All',
          text: '',
        },
        {
          icon: 'mdi-pipe-leak',
          title: 'Plumbing',
          text: '',
        },
        {
          icon: 'mdi-wheel-barrow',
          title: 'Masonry',
          text: '',
        },
        {
          icon: 'mdi-circular-saw',
          title: 'Carpentry',
          text: '',
        },
        {
          icon: 'mdi-gate',
          title: 'Welding',
          text: '',
        },
        {
          icon: 'mdi-car-hatchback',
          title: 'Mechanic',
          text: '',
        },
        {
          icon: 'mdi-flower-tulip',
          title: 'Gardening',
          text: '',
        },
        {
          icon: 'mdi-flash-circle',
          title: 'Electrician',
          text: '',
        },
        {
          icon: 'mdi-view-grid',
          title: 'tiling',
          text: '',
        },
        {
          icon: 'mdi-head-lightbulb',
          title: 'Jack',
          text: '',
        },
        {
          icon: 'mdi-comment-question',
          title: 'FAQ',
          text: '',
        },
      ],
    }),
  }
</script>
