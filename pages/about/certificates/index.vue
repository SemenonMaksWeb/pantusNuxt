<template>
  <b-container>
    <div class="container-static">
      <b-row>
        <b-col class="content">
          <div
            class="d-flex align-content-center justify-content-around flex-wrap"
          >
            <template v-for="(item, index) in certificates">
              <div class="image-box">
                <div class="image-box__image">
                  <modal-img>
                    <template #modal>
                      <img
                        :src="item.image"
                        alt="img-sertificate"
                        :title="item.name"
                        class="item-image cursor-pointer"
                      />
                    </template>
                  </modal-img>

                  <div class="image-box__title">
                    <h4>{{ item.name }}</h4>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import modalImg from "@/components/static/elements/modal-img.vue";

export default {
  name: "Index",
  components: { modalImg },
  data() {
    return {
      certificates: [
        {
          name: 'Свидетельство официального дилера ПАО "БАЛАКОВОРЕЗИНОТЕХНИКА"',
          image: `${process.env.pantus}/about/certificates/sertificate/pao_brt.jpg`,
        },
        {
          name: 'Свидетельство официального дилера АО "ВОЛЖСКРЕЗИНОТЕХНИКА"',
          image: `${process.env.pantus}/brands/vrt/certificates/vrt_dilercrt.jpg`,
        },
        {
          name: 'Свидетельство официального дилера "SEVI"',
          image: `${process.env.pantus}/upload/medialibrary/ec6/%E2%84%96-0097.jpg`,
        },
        {
          name: 'Свидетельство официального представителя АО "РЕЗИНОТЕХНИКА"',
          image: `${process.env.pantus}/about/certificates/sertificate/ao_resinotehnika.jpg`,
        },
        {
          name:
            'Свидетельство официального представителя ООО "БалаковоМеталлоРезинотехника"',
          image: `${process.env.pantus}/upload/medialibrary/8de/%D0%B1%D0%BC%D1%80%D1%82.jpg`,
        },
        {
          name: 'Свидетельство официального дилера ПАО "КЗАТЭ"',
          image: `${process.env.pantus}/about/certificates/sertificate/tarasov.jpg`,
        },
        {
          name: 'Сертификат официального дилера АО "АВТОКОМ"',
          image: `${process.env.pantus}/about/certificates/sertificate/livni.jpg`,
        },
        {
          name: 'Сертификат официального дилера ООО "ОПОРА"',
          image: `${process.env.pantus}/upload/medialibrary/dda/%D0%BE%D0%BF%D0%BE%D1%80%D0%B0.jpg`,
        },
        {
          name: 'Свидетельство о статусе представителя ОАО "УралАТИ"',
          image: `${process.env.pantus}/upload/medialibrary/ff1/%D0%9F%D0%B0%D0%BD%D1%82%D1%83%D1%81%20-%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20%D0%BE%20%D0%B4%D0%B8%D0%BB%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%B5%20%D0%A3%D0%A0%D0%90%D0%9B%D0%90%D0%A2%D0%98.jpg`,
        },
        {
          name: 'Свидетельство о статусе представителя ЗАО "ПО "ТРЕК"',
          image: `${process.env.pantus}/media-library/trek-cert.jpg`,
        },
        {
          name: 'Сертификат о статусе представителя ООО "ВАТИ-АВТО"',
          image: `${process.env.pantus}/upload/medialibrary/76e/%D0%B2%D0%B0%D1%82%D0%B8%20%D0%B0%D0%B2%D1%82%D0%BE.jpg`,
        },
        {
          name: 'Сертификат официального дистрибьютера ТД "АвтоКомпоненты"',
          image: `${process.env.pantus}/upload/medialibrary/d43/%D0%B1%D0%B7%D0%B0%D0%BA.jpg`,
        },
        {
          name: 'Сертификат статусе представителя ООО "ВЕПА"',
          image: `${process.env.pantus}/upload/medialibrary/3f4/%D0%B2%D0%B5%D0%BF%D0%B0.jpg`,
        },
        {
          name: 'Свидетельство о статусе представителя "Автореал"',
          image: `${process.env.pantus}/upload/medialibrary/a31/%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B5%D0%B0%D0%BB.jpg`,
        },
        {
          name: 'Свидетельство о статусе представителя "SS20"',
          image: `${process.env.pantus}/upload/medialibrary/2f0/ss20.jpg`,
        },
        {
          name: 'Свидетельство о статусе представителя АО "УралЭластоТехника"',
          image: `${process.env.pantus}/about/certificates/sertificate/ao_uralelastoplastika.jpg`,
        },
        {
          name: 'Свидетельство о статусе представителя ООО "ПолиуретанДеталь"',
          image: `${process.env.pantus}/upload/medialibrary/f77/page1.jpg`,
        },
        {
          name: 'Благодарственное письмо от "Вулкан-РТИ"',
          image: `${process.env.pantus}/about/certificates/sertificate/vulkan_rti.jpg`,
        },
        {
          name: 'Свидетельство о статусе официального дилера "SORL"',
          image: `${process.env.pantus}/about/certificates/sertificate/SORL.jpg`,
        },
        {
          name: 'Сертификат официального дилера ЗАО "СОАТЭ"',
          image: `${process.env.pantus}/brands/soate/sertificate/soate_dillersert.jpg`,
        },
      ],
    };
  },
  head() {
    return {
      title: "Дилерские сертификаты и свидетельства ООО Пантус",
      meta: [
        {
          name: "keywords",
          content: "дилерские свидетельства сертификаты пантус",
        },
        {
          name: "description",
          content:
            'Сертификаты и дилерские свидетельства ООО "Пантус" от производителей запчастей. Ознакомьтесь с документами подтверждающими наши дилерские полномочия',
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "assets/css/static-page-main.css";
.image-box {
  margin: 0 auto;
  padding: 10px;
  width: min-content;
}

.image-box__image {
  text-align: center;
}

.image-box__title {
  max-width: 90%;
  margin: 0 auto;
}

.item-image {
  width: auto;
  min-width: 300px;
  max-height: 450px;
  object-fit: contain;
}

@media screen and (max-width: 950px) {
  .item-image {
    width: 100%;
  }
}
</style>
