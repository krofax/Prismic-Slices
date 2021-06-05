<template>
  <!-- 
    Add the SliceZone to your template, and pass the Slice
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
// Import your Slices (ensure the path is correct)
import TextSlice from './components/slices/TextSlice'

export default {
  components: {
    SliceZone
  },
  data () {
    return {
      document: null,
      // Add your Slices to a "slices" object, which
      // will be used in the resolver function.
      slices: {
        TextSlice,
      }
    }
  },
  methods: {
    // Define a method to query Prismic for your document.
    getContent: async () => {
      this.document = await this.$prismic.client.getByUID('page', 'homepage')
    }
  },
  created () {
    // Call your query method when the component loads.
    this.getContent();
  }
}
</script>