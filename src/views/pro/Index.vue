<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Pro',

    metaInfo: { title: 'Pro Features' },

    extends: View,

    mixins: [
      LoadSections(['pro-features',
                    'theme-features',
                    'features',
                    'affiliates',
                    'social-media']),
    ],

    props: {
      id: {
        type: String,
        default: 'pro',
      },
    },
  }
</script>
