<template>
  <div class="mb-2 w-100">
    <div
      class="d-flex justify-content-between"
      :class="{ 'border-bottom': name !== undefined }"
    >
      <div class="mr-1">
        <b class="fz-6" v-if="name !== undefined">{{ name }}</b>
      </div>
      <nuxt-link
        v-if="link !== undefined"
        :title="dataset"
        :to="link"
        class="text-decoration-none text-576b77 fz-6 text-nowrap-custom pl-2 link-danger"
        >{{ dataset }}</nuxt-link
      >
      <component v-else :is="component">{{ dataset }}</component>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String | Number,
      default: undefined,
    },
    dataset: {
      type: String | Number,
      request: true,
    },
    link: {
      type: String,
      default: undefined,
    },
    component: {
      type: String,
      default: "div",
    },
  },
};
</script>
