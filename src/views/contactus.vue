<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'ContactUs',

    metaInfo: { title: 'Contact Features' },

    extends: View,

    mixins: [
      LoadSections([
        'contact-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'contactus',
      },
    },
  }
</script>
