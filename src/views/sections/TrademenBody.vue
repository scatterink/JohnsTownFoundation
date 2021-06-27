
<template>
  <base-section
    id="trademen-body"
  >
    <v-container class="fill-height px-4">
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
            cols="3"
          >
            <v-card
              elevation="6"
              outlined
              shaped
              class="mb-4"
            >
              <template>
                <v-expansion-panels>
                  <v-expansion-panel
                    v-for="(item,i) in 1"
                    :key="i"
                  >
                    <v-expansion-panel-header>
                      <div
                        class="text-center"
                      >
                        <v-row>
                          <v-col>
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
                          </v-col>
                        </v-row>
                        <v-row justify="space-around">
                          <v-avatar
                            color="indigo"
                            size="150"
                          >
                            <span class="white--text text-h5">  {{ item1.initials }}</span>
                          </v-avatar>
                        </v-row>
                        <v-row>
                          <v-col>
                            <div class="text-center">
                              <h2 class="mt-2">
                                {{ item1.name }}
                              </h2>
                            </div>
                          </v-col>
                        </v-row>
                        <div class="text-center mt-4">
                          <b> {{ item1.about }}</b>
                        </div>
                        <v-row class="mt-1">
                          <v-col>
                            <div class="text-center">
                              <v-rating
                                v-model="rating"
                                background-color="indigo lighten-3"
                                color="indigo"
                                small
                              />
                            </div>
                          </v-col>
                        </v-row>
                        <v-row class="mt-1">
                          <v-col>
                            <v-icon
                              medium
                            >
                              mdi-clipboard-check-multiple-outline
                            </v-icon><b style="color:red">{{ item1.jobs }}</b>
                          </v-col>
                        </v-row>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="text-center">
                        <h3> Review </h3>
                      </div>
                      <div class="text-center mt-2">
                        {{ item1.revname }}
                        <v-rating
                          v-model="rating"
                          background-color="indigo lighten-3"
                          color="indigo"
                          small
                        />
                      </div>
                      <div class="text-center">
                        {{ item1.msg }}
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'TrademenBody',
    data: () => ({
      list: [
        {
          icon: 'mdi-gate',
          name: 'Jon Snow',
          about: 'Welder for 9 years.',
          jobs: '5',
          initials: 'JS',
          revname: 'Sam D',
          msg: 'Best Welder Ever',
        },
        {
          icon: 'mdi-car-hatchback',
          name: 'Arya Stark',
          about: 'License Mechanic for 10 years.',
          jobs: '100',
          initials: 'AS',
          revname: 'Donovan M',
          msg: 'Avoid at all cost',
        },
        {
          icon: 'mdi-wheel-barrow',
          name: 'Rob Stark',
          about: 'young up and coming mason. looking for first job',
          jobs: '0',
          initials: 'RS',
          revname: '',
          msg: '',
        },
        {
          icon: 'mdi-flower-tulip',
          name: 'Ned Stark',
          about: 'nothing special just a regular gardner.',
          jobs: '100',
          initials: 'NS',
          revname: 'Steffany B',
          msg: 'Guy really know how to plow that land',
        },
        {
          icon: 'mdi-flash-circle',
          name: 'Bran Stark',
          about: 'Electrician for 9 years.',
          jobs: '10',
          initials: 'BS',
          revname: 'Neil P',
          msg: 'Great worker',
        },
        {
          icon: 'mdi-head-lightbulb',
          name: 'Theon Grayjoy',
          about: 'Quick thinker can do about anything.',
          jobs: '100',
          initials: 'TG',
          revname: 'Sansa S',
          msg: 'Hard worker. Ontime on Schedule',
        },
      ],
    }),
  }
</script>
