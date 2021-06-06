
<template>
  <base-section
    id="project-body"
  >
    <v-container class="fill-height px-4">
      <v-responsive
        class="d-flex align-center mx-auto"
        height="100%"
        max-width="1300"
        width="100%"
      >
        <v-row
          v-for="n in 1"
          :key="`row${n}`"
          dense
        >
          <v-col
            cols="12"
          >
            <v-card
              v-for="(item1, key) in list"
              :key="key"
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
                            <div class="text-left">
                              Project Name: <h2 class="mt-2">
                                {{ item1.head }}
                              </h2>
                            </div>
                          </v-col>
                          <v-col>
                            <div class="text-left">
                              Category: <h4 class="mt-2">
                                {{ item1.category }}
                              </h4>
                            </div>
                          </v-col>
                          <v-col>
                            <div class="text-left">
                              Start Date: <h4 class="mt-4">
                                {{ item1.start }}
                              </h4>
                            </div>
                          </v-col>
                          <v-col>
                            <div class="text-left">
                              End Date: <h4 class="mt-2">
                                {{ item1.end }}
                              </h4>
                            </div>
                          </v-col>
                        </v-row>
                        <v-row class="mt-2">
                          <v-col>
                            <div class="text-left">
                              Budget: <h4 class="mt-2">
                                {{ item1.budget }}
                              </h4>
                            </div>
                          </v-col>
                          <v-col>
                            <div class="text-left">
                              Spend: <h4 class="mt-2">
                                {{ item1.spend }}
                              </h4>
                            </div>
                          </v-col>
                          <v-col />
                          <v-col />
                        </v-row>

                        <h2 class="mt-2">
                          Summary
                        </h2>

                        <div class="text-center mt-4">
                          <b> {{ item1.summary }}</b>
                        </div>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div class="text-center">
                        {{ item1.body1 }}
                      </div>
                      <div class="text-center">
                        {{ item1.body2 }}
                      </div>
                      <div class="text-center">
                        {{ item1.body3 }}
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
    name: 'ProjectBody',
    data: () => ({
      list: [
        {
          head: 'Chicken Foot Soup',
          category: 'Sports',
          start: 'December 1, 2025',
          end: 'December 1, 2025',
          budget: '$2,000',
          spend: '$2,300',
          summary: '$2,300',
          body1: '',
          body2: '',
          body3: '',
        },
        {
          head: 'Chicken Foot Soup',
          cardbody: '$2,000',
          expbody: 'This shit is long',
        },
        {
          head: 'Chicken Foot Soup',
          cardbody: '$2,000',
          expbody: 'This shit is long',
        },
      ],
    }),
  }
</script>
