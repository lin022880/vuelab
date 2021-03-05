<template>
  <div class="headerLogo">
    <router-link :to="{name:'Home'}"><img
        :src="imgContent.logoSvg"
        alt=""
      /></router-link>

  </div>
</template>

<script>
  export default {
    name: "kkLogo",
    data() {
      return {
        imgContent: {
          // logoSvg: require("@/assets/img/kkday_logo_final.svg"),
          logoSvg: require("@/assets/logo.png"),
        },
      };
    },
  };
</script>