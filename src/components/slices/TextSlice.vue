<template>
  <prismic-rich-text :field="slice.primary.rich_text_field" />
</template>

<script>
export default {
  name: 'TextSlice',
  props: {
    slice: Object
  }
}
</script>