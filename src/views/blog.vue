<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Blog',

    metaInfo: { title: 'Blog Features' },

    extends: View,

    mixins: [
      LoadSections([
        'blog-features']),
    ],

    props: {
      id: {
        type: String,
        default: 'library',
      },
    },
  }
</script>
