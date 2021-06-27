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
          <v-container class="fill-height px-4">
            <!----Here---to--->
            <v-responsive
              class="d-flex align-center mx-auto"
              height="100%"
              max-width="1400"
              width="100%"
            >
              <v-row
                v-for="n in 1"
                :key="`row${n}`"
                dense
              >
                <v-col
                  v-for="(item1, key) in list"
                  :key="key"
                  cols="4"
                >
                  <v-card
                    elevation="6"
                    outlined
                    shaped
                    class="mb-4"
                  >
                    <div class="text-center">
                      <h2 class="mt-2">
                        <v-icon
                          large
                          v-bind="$attrs"
                          v-on="$listeners"
                        >
                          {{ item1.icon }}
                        </v-icon>
                      </h2>
                    </div>
                    <div class="text-center">
                      {{ item1.category }}
                    </div>
                    <div class="text-center">
                      <base-section-heading><b>{{ item1.description }}</b></base-section-heading>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-responsive>
          </v-container><!------------Here-->
        </div>

        <div class="mt-2 mb-4">
          We hope to accomplish set projects in these three areas while
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
    <base-section-heading title="JOHNS TOWN DISTRICT">
      <div
        style="font-size:20px"
        class="mb-4"
      >
        John's Town District:- is a community that is nested in the hills of the forgoten parish of St. Thomas. The Community can be found 15 minutes east of Morant bay. The Community's population as at the last census reading was 3000 residence.
      </div>
    </base-section-heading>
    <base-section-heading title="DIRECTORS">
      <div
        style="font-size:20px"
        class="mb-4"
      >
        There are currently four directors on the board, that are task with varying responsiblities:
      </div>
      <div class="mt-2">
        <v-container class="fill-height px-4">
          <!----Here---to--->
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="1400"
            width="100%"
          >
            <v-row
              v-for="n in 1"
              :key="`row${n}`"
              dense
            >
              <v-col
                v-for="(item2, key) in directors"
                :key="key"
                cols="3"
              >
                <v-card
                  elevation="6"
                  outlined
                  shaped
                  class="mb-4"
                >
                  <div class="text-center">
                    <h3> {{ item2.name }}</h3>
                  </div>
                  <div class="text-center">
                    <base-section-heading><b>{{ item2.description1 }}</b></base-section-heading>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-responsive>
        </v-container><!------------Here-->
      </div>
    </base-section-heading>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAbout',

    data: () => ({
      list: [{
               icon: 'mdi-account-group',
               category: 'Community Development',
               description: 'These are projects that are centered around developing the community and the people of Johns Town.',
             },
             {
               icon: 'mdi-book-open-variant',
               category: 'Education',
               description: 'These are projects that are centered around informing, educating and teaching the people of Johns Town.',
             },
             {
               icon: 'mdi-soccer',
               category: 'Sports & Entertainment',
               description: 'These are projects that are centered around bringing the people of Johns Town toether through Sports and Entertainment. ',
             },

      ],
      directors: [{
                    name: 'Randy Edwards',
                    description1: 'Education',
                  },
                  {
                    name: 'Neil Perkins',
                    description1: 'Community Development',
                  },
                  {
                    name: 'Herms Stanley',
                    description1: 'Treasurer, stratgey and alignment. ',
                  },
                  {
                    name: 'Romaine Williams',
                    description1: 'Sports & Entertainment ',
                  },

      ],
    }),
  }
</script>
