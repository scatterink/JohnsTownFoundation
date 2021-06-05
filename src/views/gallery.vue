<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Gallery',

    metaInfo: { title: 'Pro Features' },

    extends: View,

    mixins: [
      LoadSections(['gallery-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'gallery',
      },
    },
  }
</script>
