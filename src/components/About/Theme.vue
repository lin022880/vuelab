<template>
  <!-- 主題列表 -->
  <section class="theme">
    <div class="container">
      <div class="themeLists">
        <a
          href="#"
          v-for="(value,key) of computedSort_themeIcon"
          :key="key"
        >
          <div class="themeBlock">
            <div class="themeType">
              <i
                class="themeIcon"
                :class="themeIcon_hot(key)"
                :style="methodStyle_themeIcon(value.id)"
              ></i>
            </div>
            <p class="themeTitle">{{ value.content }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "theme",
    data() {
      return {
        styleContent: {
          theme: {
            themeIcon: [
              { iconBg: "ic_theme_gift.svg" },

              { iconBg: "ic_theme_rent.svg" },
              { iconBg: "ic_theme_family.svg" },
              { iconBg: "ic_theme_hotel.svg" },
              {
                iconBg: "ic_theme_outdoor2.svg",
              },

              { iconBg: "ic_theme_gift2.svg" },
            ],
          },
        },
        theme: {
          themeTitle: [
            { content: "伴手禮", id: 0, hot: false, new: true },
            { content: "租車自駕", id: 1, hot: true, new: false },
            { content: "親子商品", id: 2, hot: false, new: false },
            { content: "飯店住宿", id: 3, hot: false, new: false },
            { content: "台灣一日遊", id: 4, hot: false, new: false },
            { content: "特色體驗", id: 5, hot: false, new: false },
          ],
        },
      };
    },
    computed: {
      // theme主題列表new,hot排序
      computedSort_themeIcon() {
        let sortThemeIcon = this.theme.themeTitle;
        return sortThemeIcon.sort(function (a, b) {
          return a.new || b.new ? b.new - a.new : b.hot - a.hot;
        });
      },
    },
    methods: {
      // 處理theme iconBg路徑
      methodStyle_themeIcon(id) {
        return (
          "backgroundImage:url(" +
          require("@/assets/img/themeLists/" +
            this.styleContent.theme.themeIcon[id].iconBg +
            "") +
          ")"
        );
      },
      // theme主題列表icon標示new,hot
      themeIcon_hot(key) {
        return this.theme.themeTitle[key].new === true
          ? "new"
          : this.theme.themeTitle[key].hot === true
          ? "hot"
          : "";
      },
    },
  };
</script>