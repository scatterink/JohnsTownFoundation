<template>
  <base-section
    id="about-features"
  >
    <v-img
      :src="require('@/assets/logo.jpg')"
      class="mx-auto mb-8"
      max-width="200"
    />

    <base-section-heading title="OUR DNA">
      <div
        style="font-size:20px"
        class="mb-4"
      >
        The John's Town Foundation is a movement made
        up of several different people from all backgrounds, including those
        who currently live in the community of John's Town and those who
        live outside (i.e both locally and abroad)..
      </div>
      <div
        style="font-size:20px"
        class="mb-4"
      >
        THE PEOPLE all live, sleep and breathe the community
        of John's Town. Despite its many challenges, like everywhere else, we accept it.
        Althoug we may live near or far, we strongly believe it is the best place to live and
        grow a family. This is the reason why the John's Town Foundation was created.  The John's Town
        Foundation pride itself on being a fair and inclusive organization
        that focuses on assisting teh community and in ensuring that it grows
        to its fullest potential. The John's Town Foundation is a not for profit organization with no affiliations
        with any political or religious entity.
      </div>
      <div
        style="font-size:20px"
        class="mb-4"
      >
        THE FOUNDATION focues on three areas which include:
        <div class="mt-2">
          Sports & Entertainment
        </div>
        <div class="mt-2">
          Education
        </div>
        <div class="mt-2">
          Community Development
        </div>
        <div class="mt-2 mb-4">
          We hope to accomplish projects in these three areas while
          guided by good moral values, discipline and standards that were
          instilled in us by our elders.
        </div>
        <div
          style="font-size:20px"
          class="mb-4"
        >
          THE FOUNDATION takes pride in preserving our community's traditions
          and culture, however we would like to carve new paths and ways
          that are deemed effective.
        </div>
        <div
          style="font-size:20px"
          class="mb-4"
        >
          For example: one of our current project, that we already started the groud work,
          is tp build a multipurpose building, which we envision, will house teh community
          , a computer lab, and a designated meeting room.
        </div>
        <div
          style="font-size:20px"
          class="mb-4"
        >
          We have numerouse projects and exhiting initiatves planned, and we encourage
          everyone to jump on board, as we stand together as one to build a strong
          John's Town.
        </div>
      </div>
    </base-section-heading>
    <base-section-heading title="DIRECTORS">
      <div
        style="font-size:20px"
        class="mb-4"
      >
        There are currently four directors on the board, that are task with varying responsiblities:
      </div>
    </base-section-heading>
    <v-row>
      <v-col class="text-center">
        <h3>
          Randy Edwards
        </h3>
      </v-col>
      <v-col class="text-center">
        <h3>
          Neil Perkins
        </h3>
      </v-col>

      <v-col class="text-center">
        <h3>
          Herms Stanley
        </h3>
      </v-col>
      <v-col class="text-center">
        <h3>
          Romaine Williams
        </h3>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAbout',

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
