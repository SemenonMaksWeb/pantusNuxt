<template>
  <b-row class="justify-content-center justify-content-md-start">
    <b-col
      cols="10"
      md="6"
      lg="4"
      class="mb-3"
      v-for="data in array"
      :key="data.id"
    >
      <BlogProduct :datasetProduct="data"> </BlogProduct>
    </b-col>
  </b-row>
</template>

<script>
import BlogProduct from "@/components/products/popular/blog";
export default {
  name: "product-blogs-get",
  props: {
    array: {},
  },
  components: {
    BlogProduct,
  },
};
</script>
