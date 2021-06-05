<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Donate',

    metaInfo: { title: 'Donate Features' },

    extends: View,

    mixins: [
      LoadSections(['donate-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'donate',
      },
    },
  }
</script>
