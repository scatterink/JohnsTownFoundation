<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Projects',

    metaInfo: { title: 'ProjectHeading' },

    extends: View,

    mixins: [
      LoadSections(['project-heading',
                    'pro-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'projects',
      },
    },
  }
</script>
