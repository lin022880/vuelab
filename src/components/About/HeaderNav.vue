<template>
  <ul class="headerNav">
    <li
      v-for="(value, key) of headerNav"
      :key="key"
    >
      <a
        :style="methodStyle_headerNav_a(key)"
        href="#"
      >
        <i
          v-if="value.title == '下載App享優惠'"
          class="fas fa-mobile-alt"
          :style="methodStyle_headerNav_i(value.title)"
        ></i>
        {{ value.title | filterHeaderNav}}
        <i
          v-if="value.id != 0  && value.id != 4 && value.title != '購物車'"
          class="fas fa-angle-down"
          :style="methodStyle_headerNav_i(value.title)"
        ></i>
        <i
          v-if="value.title == '購物車'"
          class="fas fa-shopping-cart"
          :style="methodStyle_headerNav_i(value.title)"
        ></i>
      </a>
    </li>
  </ul>
</template>


<script>
  export default {
    name: "headerNav",
    data() {
      return {
        headerNav: [
          { title: "下載App享優惠", id: 0 },
          { title: "繁體中文", id: 1 },
          { title: "TWD", id: 2 },
          { title: "購物車", id: 3 },
          { title: "登入/註冊", id: 4 },
        ],
        styleContent: {
          headerNav: {
            color1: { color: "#138184" },
            color2: { color: "#666" },
          },
        },
      };
    },
    filters: {
      // 處理headerNav資料 過濾掉'購物車'
      filterHeaderNav(headerNav) {
        return headerNav == "購物車" ? "" : headerNav;
      },
    },
    methods: {
      // 處理headerNav樣式 字體顏色
      methodStyle_headerNav_a(key) {
        return key === 0
          ? this.styleContent.headerNav.color1
          : this.styleContent.headerNav.color2;
      },
      // 處理headerNav icon距離
      methodStyle_headerNav_i(value) {
        return value == "購物車" ? "margin-left: 0" : "margin-left: 5px";
      },
    },
  };
</script>