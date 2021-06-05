<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Sponsors',

    metaInfo: { title: 'Sponsor Features' },

    extends: View,

    mixins: [
      LoadSections(['sponsor-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'sponsors',
      },
    },
  }
</script>
