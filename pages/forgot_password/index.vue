<template>
  <b-container>
    <p>Если вы забыли пароль, введите E-Mail.</p>
    <p>
      Контрольная строка для смены пароля, а также ваши регистрационные данные,
      будут высланы вам по E-Mail.
    </p>
    <b-row class="mb-2">
      <VInput items="Email:" name="Email" :error="error.Email" :$v="$v" />
    </b-row>
    <base-button @click="ClickBnt">Отправить</base-button>
  </b-container>
</template>

<script>
import MixinsError from "@/mixins/form/forgot-password/error";
import MixinsValidations from "@/mixins/form/forgot-password/validator";
import VInput from "@/components/input/input-validate";
// import VInput from "@/components/register/index";
import BaseButton from "@/components/base/button/base-button";
export default {
  components: {
    BaseButton,
    VInput,
  },
  mixins: [MixinsError, MixinsValidations],
  middleware: "CheckUser",
  methods: {
    ClickBnt() {
      this.$v.Form.$touch();
      if (this.$v.Form.$error === false) {
        // ЗАПРОС  НА СЕРВЕР
      }
    },
  },
};
</script>
