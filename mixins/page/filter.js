export default {
  methods: {
    linkGen(pageNum) {
      // генерация ссылок Page
      let page;
      if (pageNum === 1) {
        page = undefined;
      } else {
        page = pageNum;
      }
      return {
        name: this.$route.query.name,
        query: {
          ...this.$route.query,
          page_number: page,
        },
      };
    },
  },
};
