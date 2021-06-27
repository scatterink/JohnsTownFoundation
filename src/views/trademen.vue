<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'TradeMen',

    metaInfo: { title: 'Trade Features' },

    extends: View,

    mixins: [
      LoadSections(['trade-heading',
                    'trade-features',
                    'trademen-body']),
    ],

    props: {
      id: {
        type: String,
        default: 'trademen',
      },
    },
  }
</script>
