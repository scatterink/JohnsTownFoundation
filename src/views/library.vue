<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Library',

    metaInfo: { title: 'Library Features' },

    extends: View,

    mixins: [
      LoadSections([
        'library-heading', 'csoon-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'library',
      },
    },
  }
</script>
