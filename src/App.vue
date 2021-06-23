<template>
  <!-- 
    Add the SliceZone to template, and pass the Slice
    data and a resolver function as props.
  -->
  <SliceZone
    :slices="document.data.body"
    :resolver="({ sliceName }) => slices[sliceName]"
  />
</template>

<script>
// Import the SliceZone
import SliceZone from 'vue-slicezone'
// Import Slices
import TextSlice from './slices/TextSlice'

export default {
  components: {
    SliceZone
  },
  data () {
    return {
      document: null,
      // Add Slices to a "slices" object, which
      // will be used in the resolver function.
      slices: {
        TextSlice,
      }
    }
  },
  methods: {
    // Define a method to query Prismic for your document.
    getContent: async () => {
      this.document = await this.$prismic.client.getSingle('page')
      console.log('RESPONSEEEEE-', this.document.data.body)
    }
  },
  created () {
    // Call query method when the component loads.
    this.getContent();
  }
}
</script>