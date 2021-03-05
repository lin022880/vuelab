<template>
  <div class="about">
    <div :class="classContent.fontFamilyContent">
      <privacyPolicies />
      <!-- Logo和headerNav -->
      <div class="headerApp">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <kkLogo />
            <headerNav />
          </div>
        </div>
      </div>
      <!-- 搜尋區塊 -->
      <homeBanner />
      <!-- 主題列表 -->
      <theme />
      <!-- 最新優惠 -->
      <latest />
      <copyright />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import PrivacyPolicies from "@/components/About/PrivacyPolicies.vue";
  import Copyright from "@/components/About/Copyright.vue";
  import kkLogo from "@/components/About/KKlogo.vue";
  import headerNav from "@/components/About/HeaderNav.vue";
  import homeBanner from "@/components/About/HomeBanner.vue";
  import theme from "@/components/About/Theme.vue";
  import latest from "@/components/About/Latest.vue";

  export default {
    name: "About",
    components: {
      PrivacyPolicies,
      Copyright,
      kkLogo,
      headerNav,
      homeBanner,
      theme,
      latest,
    },
    data() {
      return {
        classContent: {
          fontFamilyContent: { fontFamilyContent: true },
        },
      };
    },
  };
</script>
<style>
  @import "../assets/css/style/about.css";
</style>
