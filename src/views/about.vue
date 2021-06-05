<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'About',

    metaInfo: { title: 'about Features' },

    extends: View,

    mixins: [
      LoadSections(['about-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
