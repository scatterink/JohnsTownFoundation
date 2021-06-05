<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Merchandise',

    metaInfo: { title: 'Merch Features' },

    extends: View,

    mixins: [
      LoadSections(['merch-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'merchandise',
      },
    },
  }
</script>
