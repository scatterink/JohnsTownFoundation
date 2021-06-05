<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Schools',

    metaInfo: { title: 'School Features' },

    extends: View,

    mixins: [
      LoadSections(['school-heading',
                    'pro-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'schools',
      },
    },
  }
</script>
