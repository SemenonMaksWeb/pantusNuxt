<template>
  <b-container>
    <div
      style="width: 50%; height: 15px; position: absolute; background: #fff"
    />
    <iframe
      id="cp_frame"
      src="https://lamps.catalogs-parts.com/#{client:sm90kj;lang:ru}"
      scrolling=""
      style="height: 100vh"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      width="100%"
    />
  </b-container>
</template>

<script>
export default {
  name: "Avtolampy",
  head() {
    return {
      title: `Оригинальные каталоги`,
      meta: [
        {
          name: "description",
          content: ``,
        },
        {
          name: "keywords",
          content: `Запчасти, автозапчасти, купить запчасти, каталог запчастей, интернет магазин автозапчастей, продажа запчастей, запчасти ваз, газ, камаз, маз`,
        },
      ],
    };
  },
};
</script>
