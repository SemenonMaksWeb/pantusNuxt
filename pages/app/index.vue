<template>
  <div class="app-bg">
    <div class="container-static">
      <!--    test22-->
      <div class="mobile-app">
        <div class="main-block">
          <div class="header">
            <div class="header-logo-panel">
              <div class="header-logo-panel__col header-logo-panel_left">
                <a href="https://pantus.ru"
                  ><img
                    class="logo-ico"
                    :src="urlPantus + '/app/assets/images/pantus_logo.jpg'"
                    alt="pantus"
                /></a>
              </div>
              <div class="header-logo-panel__col">
                <img
                  class="logo-ico"
                  :src="urlPantus + '/app/assets/images/icon.png'"
                  alt="pantus_l"
                />
              </div>
              <div class="header-logo-panel__col header-logo-panel_right">
                <a
                  href="tel:8(800)5558721"
                  class="header-logo-panel__phone-text"
                  ><span>8 (800) 555 87 21</span></a
                >
              </div>
            </div>

            <div class="header_text company_title"><h1>Pantus AR</h1></div>
            <div class="header_text">
              <article class="header_description">
                Отсканируйте упаковку товара с помощью этого приложения, чтобы
                увидеть <br />
                его 3D-модели на экране смартфона в дополненной реальности и
                <br />получить информацию о его особенностях и преимуществах.
              </article>
            </div>
          </div>
          <div class="app-market">
            <div class="app-market__row">
              <div class="app-market__button">
                <a
                  class="btn-qr-code"
                  href="https://play.google.com/store/apps/details?id=ru.sigmadigital.pantus"
                >
                  <img
                    :src="urlPantus + '/app/assets/images/btn-android.png'"
                    alt="app-android"
                  />
                </a>
              </div>
              <div class="app-market__qr-code">
                <img
                  :src="urlPantus + '/app/assets/images/qr-code-android.png'"
                  alt="app-android-qr"
                  @click="openModal('android')"
                />
              </div>
            </div>
            <div class="app-market__row">
              <div class="app-market__button">
                <a
                  class="btn-qr-code"
                  href="https://apps.apple.com/us/app/pantus/id1475702773"
                >
                  <img
                    :src="urlPantus + '/app/assets/images/btn-ios.png'"
                    alt="app-ios"
                  />
                </a>
              </div>
              <div class="app-market__qr-code">
                <img
                  :src="urlPantus + '/app/assets/images/qr-code-ios.png'"
                  alt="app-ios-qr"
                  @click="openModal('ios')"
                />
              </div>
            </div>
          </div>
          <div class="section-1">
            <div class="section-1__img">
              <img
                :src="
                  urlPantus + '/app/assets/images/section_1_bottom_phone.png'
                "
                alt=""
              />
            </div>
            <div class="arrow">
              <div class="arrow-ico" />
            </div>
          </div>
          <div class="section-2">
            <div class="demonstrations__row reverse-column">
              <div class="demonstrations__img img-left">
                <img
                  :src="urlPantus + '/app/assets/images/section-1.png'"
                  alt="app-phone-3d"
                />
              </div>
              <div class="demonstrations__text-block block-right">
                <div class="text-block__contain contain-right">
                  <div class="text-block__title">3d модель запчасти</div>
                  <div class="text-block__description">
                    Отсканируйте упаковку товара с помощью этого приложения,
                    чтобы увидеть его 3D-модели на экране смартфона в
                    дополненной реальности и получить информацию о его
                    особенностях и преимуществах.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-3">
            <div class="demonstrations__row direct-column">
              <div class="demonstrations__text-block block-left">
                <div class="text-block__contain contain-left">
                  <div class="text-block__title">
                    Запчасти на экране в дополненной реальности
                  </div>
                  <div class="text-block__description">
                    В дополненной реальности вы можете посмотреть деталь со всех
                    сторон, узнать важную информацию о технологии производства
                    запчасти, посмотреть видео или перейти на страницу запчасти
                    на сайте pantus.ru
                  </div>
                </div>
              </div>
              <div class="demonstrations__img img-right">
                <img
                  :src="urlPantus + '/app/assets/images/section-2.png'"
                  alt="app-phone-vr"
                />
              </div>
            </div>
          </div>
          <div class="section-4">
            <div class="demonstrations__row reverse-column">
              <div class="demonstrations__img img-left">
                <img
                  :src="urlPantus + '/app/assets/images/section-3.png'"
                  alt="app-phone-catalog"
                />
              </div>
              <div class="demonstrations__text-block block-right">
                <div class="text-block__contain contain-right">
                  <div class="text-block__title">Каталог и товары</div>
                  <div class="text-block__description">
                    В нашем приложении также реализован каталог, с поиском
                    запчастей. В карточке запчасти предоставлена
                    минимально-важная информация, вы можете посмотреть видео о
                    запчасти или перейти на страницу запчасти на сайте
                    pantus.ru, или оставить заявку прямо с приложения.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-5">
            <div class="demonstrations__row direct-column">
              <div class="demonstrations__text-block block-left">
                <div class="text-block__contain contain-left">
                  <div class="text-block__title">Новости компании</div>
                  <div class="text-block__description">
                    Перейдя в раздел Новости, ознакомтесь с последними событиями
                    компании, текущих акциях, и специальных предложениях для
                    наших покупателей и партнеров.
                  </div>
                </div>
              </div>
              <div class="demonstrations__img img-right">
                <img
                  :src="urlPantus + '/app/assets/images/section-4.png'"
                  alt="app-phone-news"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-contain">
          <div class="footer-logo">
            <div class="footer-logo__ico">
              <img
                class="logo-ico"
                :src="urlPantus + '/app/assets/images/icon.png'"
                alt="pantus-logo"
              />
            </div>
            <div class="company_title"><h1>Pantus AR</h1></div>
          </div>
          <div class="app-market">
            <div class="app-market__row">
              <div class="app-market__button">
                <a
                  class="btn-qr-code"
                  href="https://play.google.com/store/apps/details?id=ru.sigmadigital.pantus"
                >
                  <img
                    :src="urlPantus + '/app/assets/images/btn-android.png'"
                    alt="app-android"
                  />
                </a>
              </div>
              <div class="app-market__qr-code">
                <img
                  :src="urlPantus + '/app/assets/images/qr-code-android.png'"
                  alt="app-android-qr"
                  @click="openModal('android')"
                />
              </div>
            </div>
            <div class="app-market__row">
              <div class="app-market__button">
                <a
                  class="btn-qr-code"
                  href="https://apps.apple.com/us/app/pantus/id1475702773"
                >
                  <img
                    :src="urlPantus + '/app/assets/images/btn-ios.png'"
                    alt="app-ios"
                  />
                </a>
              </div>
              <div class="app-market__qr-code">
                <img
                  :src="urlPantus + '/app/assets/images/qr-code-ios.png'"
                  alt="app-ios-qr"
                  @click="openModal('ios')"
                />
              </div>
            </div>
          </div>
          <div class="copyrite-text">
            <div>© 2003–2018 ООО «ПАНТУС» Все права защищены</div>
            <div>Визуальные материалы подготовлены в ознакомительный целях</div>
            <div>Разработано в mitroliti</div>
          </div>
        </div>
      </div>

      <div id="myModal" ref="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="modal-header-block">
            <span ref="close" class="close" @click="closeModal">&times;</span>
          </div>
          <div class="modal-image-block">
            <img :src="qrCodeUrl" alt="modal-qr-code" />
          </div>
          <div class="modal-text-block">
            ОТСКАНИРУЙТЕ QR-CODE ДЛЯ ТОГО ЧТОБЫ СКАЧАТЬ ПРИЛОЖЕНИЕ
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-app",
  layout: "app",
  data() {
    return {
      qrCodeUrl: null,
      urlPantus: process.env.pantus,
    };
  },
  head() {
    return {
      title: "Pantus AR",
      meta: [
        {
          name: "description",
          content:
            "Отсканируйте упаковку товара с помощью этого приложения, чтобы увидеть его 3D-модели на экране смартфона в дополненной реальности и получить информацию о его особенностях и преимуществах.",
        },
      ],
    };
  },
  methods: {
    openModal(typeQrCode) {
      typeQrCode === "android"
        ? (this.qrCodeUrl = `${process.env.pantus}/app/assets/images/frame-android.png`)
        : (this.qrCodeUrl = `${process.env.pantus}/app/assets/images/frame-ios.png`);
      const mdl = this.$refs.myModal;
      mdl.style.display = "block";
    },

    closeModal() {
      const mdl = this.$refs.myModal;
      mdl.style.display = "none";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700&subset=cyrillic");

.app-bg {
  position: relative;
  width: 100%;
  min-width: 370px;
  overflow-x: hidden;
  background-color: #292934 !important;
  color: #272727;
  font-size: 16px;
  font-family: roboto-400, sans-serif !important;
  font-weight: 400 !important;
  line-height: 1.5 !important;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

.mobile-app {
  display: flex;
  justify-content: center;
}

.mobile-app:before {
  content: "";
  position: absolute;
  top: -100px;
  left: 50%;
  width: 1920px;
  height: 1030px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 0px 0px 1000px 1000px;
  background-color: #fff;
}

.main-block {
  z-index: 1;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 1200px;
}

.header-logo-panel {
  display: flex;
  justify-content: space-around;
}

.header_text {
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
}

.company_title {
  margin-top: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
}
.company_title > h1 {
  font-weight: 700;
}

.header_description {
  color: #464646;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.header-logo-panel__col {
  display: flex;
  align-items: center;
}

.logo-ico {
  height: 68px;
  width: auto;
}

.header-logo-panel__phone-text {
  display: block;
  color: #272727;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 18px;
}

.header-logo-panel__phone-text:before {
  content: "";
  display: inline-block;
  width: 24px;
  max-width: 24px;
  height: 24px;
  max-height: 24px;
  margin-right: 10px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM4NCAzODQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4NCAzODQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzUzLjE4OCwyNTIuMDUyYy0yMy41MSwwLTQ2LjU5NC0zLjY3Ny02OC40NjktMTAuOTA2Yy0xMC45MDYtMy43MTktMjMuMzIzLTAuODMzLTMwLjQzOCw2LjQxN2wtNDMuMTc3LDMyLjU5NCAgICBjLTUwLjA3My0yNi43MjktODAuOTE3LTU3LjU2My0xMDcuMjgxLTEwNy4yNmwzMS42MzUtNDIuMDUyYzguMjE5LTguMjA4LDExLjE2Ny0yMC4xOTgsNy42MzUtMzEuNDQ4ICAgIGMtNy4yNi0yMS45OS0xMC45NDgtNDUuMDYzLTEwLjk0OC02OC41ODNDMTMyLjE0NiwxMy44MjMsMTE4LjMyMywwLDEwMS4zMzMsMEgzMC44MTJDMTMuODIzLDAsMCwxMy44MjMsMCwzMC44MTIgICAgQzAsMjI1LjU2MywxNTguNDM4LDM4NCwzNTMuMTg4LDM4NGMxNi45OSwwLDMwLjgxMy0xMy44MjMsMzAuODEzLTMwLjgxM3YtNzAuMzIzQzM4NCwyNjUuODc1LDM3MC4xNzcsMjUyLjA1MiwzNTMuMTg4LDI1Mi4wNTJ6ICAgICBNMzYyLjY2NywzNTMuMTg4YzAsNS4yMjktNC4yNSw5LjQ3OS05LjQ3OSw5LjQ3OWMtMTgyLjk5LDAtMzMxLjg1NC0xNDguODY1LTMzMS44NTQtMzMxLjg1NGMwLTUuMjI5LDQuMjUtOS40NzksOS40NzktOS40NzkgICAgaDcwLjUyMWM1LjIyOSwwLDkuNDc5LDQuMjUsOS40NzksOS40NzljMCwyNS44MDIsNC4wNTIsNTEuMTI1LDExLjk3OSw3NS4xMTVjMS4xMDQsMy41NDIsMC4yMDgsNy4yMDgtMy4zNzUsMTAuOTM4TDgyLjc1LDE2NS40MjcgICAgYy0yLjQ1OCwzLjI2LTIuODQ0LDcuNjI1LTEsMTEuMjZjMjkuOTI3LDU4LjgyMyw2Ni4yOTIsOTUuMTg4LDEyNS41MzEsMTI1LjU0MmMzLjYwNCwxLjg4NSw4LjAyMSwxLjQ5LDExLjI5Mi0wLjk3OSAgICBsNDkuNjc3LTM3LjYzNWMyLjUxLTIuNTEsNi4yNzEtMy40MDYsOS42NjctMi4yNWMyNC4xNTYsNy45NzksNDkuNDc5LDEyLjAyMSw3NS4yNzEsMTIuMDIxYzUuMjI5LDAsOS40NzksNC4yNSw5LjQ3OSw5LjQ3OSAgICBWMzUzLjE4OHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzM2MzYzNiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+);
  background-size: cover;
  vertical-align: middle;
}

.app-market__row {
  display: flex;
  justify-content: center;
}

.app-market__qr-code,
.app-market__button {
  height: 70px;
  margin: 10px;
}

.app-market__button > a > img,
.app-market__qr-code > img {
  height: 100%;
  width: auto;
}

.section-1 {
  margin-top: 35px;
}

.section-1__img {
  max-height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.section-1__img > img {
  height: auto;
  width: 100%;
  object-fit: contain;
}

.arrow {
  display: flex;
  justify-content: center;
}

.arrow-ico {
  left: 50%;
  width: 42px;
  max-width: 42px;
  height: 42px;
  max-height: 42px;
  border-radius: 21px;
  background-color: #373744;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzEuNDc5IDMxLjQ3OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEuNDc5IDMxLjQ3OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGIiBkPSJNMjYuNDg1LDIxLjIwNmMwLjQyOS0wLjQ0NCwwLjQyOS0xLjE0MywwLTEuNTg3Yy0wLjQ0NC0wLjQyOS0xLjE1OS0wLjQyOS0xLjU4NywwbC04LjA0Nyw4LjA0NyAgVjEuMTExQzE2Ljg1MSwwLjQ5MiwxNi4zNTksMCwxNS43NCwwYy0wLjYxOSwwLTEuMTI3LDAuNDkyLTEuMTI3LDEuMTExdjI2LjU1NWwtOC4wMzEtOC4wNDdjLTAuNDQ0LTAuNDI5LTEuMTQzLTAuNDI5LTEuNTg3LDAgIGMtMC40MjksMC40NDQtMC40MjksMS4xNDMsMCwxLjU4N2w5Ljk1Miw5Ljk1MmMwLjQyOSwwLjQyOSwxLjE0MywwLjQyOSwxLjU4NywwTDI2LjQ4NSwyMS4yMDZ6IiBkYXRhLW9yaWdpbmFsPSIjMUUyMDFEIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMUUyMDFEIj48L3BhdGg+PC9nPiA8L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
}

.demonstrations__row {
  display: flex;
}

.demonstrations__img {
  width: 50%;
  max-width: 500px;
}
.demonstrations__text-block {
  display: flex;
  width: 50%;
}

.text-block__title {
  margin-bottom: 30px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: left;
  padding: 10px;
}
.text-block__description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  line-height: 32px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.text-block__contain {
  width: 85%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0;
  margin-right: 0;
}

.block-left {
  justify-content: flex-start;
}
.block-right {
  justify-content: flex-end;
}
.contain-left {
  padding-left: 20px;
}
.contain-right {
  padding-right: 20px;
}

.img-left {
  padding-left: 20px;
  margin-right: auto;
}
.img-right {
  padding-right: 20px;
  margin-left: auto;
}

.footer {
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.footer:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 1920px;
  height: 950px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 1000px 1000px 0px 0px;
  background-color: #fff;
}

.footer-contain {
  margin-top: 50px;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 30px;
}

.footer-logo {
  text-align: center;
  margin-bottom: 30px;
}

.copyrite-text {
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #b1b5b7;
  font-size: 14px;
  text-align: center;
  margin-top: 40px;
}

@media screen and (max-width: 950px) {
  .main-block {
    width: 90%;
  }

  .header-logo-panel_right,
  .header-logo-panel_left {
    display: none;
  }
  .header_description {
    max-width: 100%;
  }

  .section-1__img {
    max-width: 100%;
  }

  .reverse-column {
    flex-direction: column-reverse;
  }
  .direct-column {
    flex-direction: column;
  }

  .text-block__contain {
    width: 100%;
    padding: 0;
  }
  .demonstrations__img {
    width: 100%;
    padding: 10px;
  }
  .demonstrations__text-block {
    width: 100%;
  }
  .text-block__title {
    text-align: center;
  }
  .img-left,
  .img-right {
    margin-right: auto;
    margin-left: auto;
  }

  .copyrite-text {
    flex-direction: column;
  }

  .app-market__button > a > img,
  .app-market__qr-code > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header-block {
  text-align: end;
}
.modal-image-block {
  width: 80%;
  align-self: center;
  height: 500px;
}
.modal-text-block {
  margin: 30px 0 5px;
  color: #b1b5b7;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
</style>
