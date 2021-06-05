<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'PostOffice',

    metaInfo: { title: 'postoffice Features' },

    extends: View,

    mixins: [
      LoadSections([
        'post-heading', 'csoon-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'postoffice',
      },
    },
  }
</script>
