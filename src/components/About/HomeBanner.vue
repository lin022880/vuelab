<template>
  <!-- 搜尋區塊 -->
  <section
    class="homeBanner"
    :style="computedBgImg_homeBanner"
  >
    <div class="overlap"></div>
    <div class="homeSearch">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="kkSearch">
              <h1
                class="title"
                :style="styleContent.homeBanner.kkSearch.title"
              >
                {{ homeBanner.kkSearch.title }}
              </h1>
              <h5
                class="subTitle"
                :style="styleContent.homeBanner.kkSearch.subTitle"
              >
                {{ homeBanner.kkSearch.subTitle }}
              </h5>
              <div
                class="searchBlock"
                v-click-outside="hidePanel_searchBlock"
              >
                <!-- 搜尋input -->
                <div class="input-group">
                  <input
                    id="search_experience_value"
                    placeholder="輸入目的地、景點、體驗行程或活動名稱..."
                    type="text"
                    aria-autocomplete="both"
                    aria-haspopup="false"
                    autocapitalize="off"
                    autocomplete="off"
                    autocorrect="off"
                    spellcheck="false"
                    maxlength="50"
                    class="form-control"
                    @click="clickHandler_searchBlock"
                    v-focus
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-info"
                      type="button"
                    >
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
                <!-- 搜尋dropdown -->
                <div
                  v-show="homeBanner.kkSearch.search_dropdown"
                  class="search_dropdown"
                >
                  <div class="suggest">
                    <h4 class="title">熱門目的地</h4>
                    <ul>
                      <li
                        v-for="(value, key) of computedSort_dropdownContent.slice(0,homeBanner.kkSearch.dropdownCount)"
                        :key="key"
                      >
                        <a href="#">{{ value.content }}<i
                            class="fab fa-hotjar"
                            v-if="value.hot"
                          ></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="quickSearch">
              <span class="quickSearch_title">{{ homeBanner.quickSearch.title }}</span>
              <span class="gap">|</span>
              <div class="search_keyword">
                <!-- keyword裡面取keywordCount數量做顯示 -->
                <span
                  v-for="(value, key) of homeBanner.quickSearch.keyword.slice(0,homeBanner.quickSearch.keywordCount)"
                  :key="key"
                >
                  <a
                    class="btn btn-outline-light"
                    href="#"
                  >{{ value.content }}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    name: "homeBanner",
    data() {
      return {
        styleContent: {
          homeBanner: {
            bgImg: {
              backgroundImage:
                "url(" +
                require("@/assets/img/home_banner" +
                  Math.floor(1 + Math.random() * 4) +
                  ".jpg") +
                ")",
            }, // ComputedImg_homeBanner處理
            kkSearch: {
              title: { color: "#fff", fontSize: "32px" },
              subTitle: { color: "#fff", fontSize: "16px" },
            },
          },
        },
        homeBanner: {
          kkSearch: {
            title: "全世界最棒的旅遊體驗",
            subTitle: "帶你深入探索有趣又獨特的旅遊體驗行程",
            search_dropdown: false,
            dropdownCount: 15,
            dropdownContent: [
              { content: "基隆", hot: false, searchCount: 0 },
              { content: "台北", hot: false, searchCount: 2 },
              { content: "新北市", hot: false, searchCount: 0 },
              { content: "桃園", hot: false, searchCount: 0 },
              { content: "新竹", hot: false, searchCount: 0 },
              { content: "苗栗", hot: false, searchCount: 0 },
              { content: "台中", hot: false, searchCount: 5 },
              { content: "彰化", hot: false, searchCount: 0 },
              { content: "南投", hot: false, searchCount: 0 },
              { content: "雲林", hot: false, searchCount: 0 },
              { content: "嘉義", hot: true, searchCount: 120 },
              { content: "台南", hot: false, searchCount: 0 },
              { content: "高雄", hot: true, searchCount: 3 },
              { content: "屏東", hot: false, searchCount: 0 },
              { content: "宜蘭", hot: false, searchCount: 0 },
              { content: "花蓮", hot: false, searchCount: 0 },
              { content: "台東", hot: false, searchCount: 0 },
              { content: "澎湖", hot: false, searchCount: 0 },
              { content: "琉球", hot: false, searchCount: 0 },
              { content: "金門", hot: false, searchCount: 0 },
              { content: "馬祖", hot: true, searchCount: 0 },
              { content: "蘭嶼", hot: false, searchCount: 100 },
            ],
          },
          quickSearch: {
            title: "熱門關鍵字",
            keywordCount: 10,
            keyword: [
              { content: "泡湯" },
              { content: "北投" },
              { content: "露營" },
              { content: "泡湯" },
              { content: "北投" },
              { content: "露營" },
              { content: "泡湯" },
              { content: "北投" },
              { content: "露營" },
              { content: "泡湯" },
              { content: "北投" },
              { content: "露營" },
            ],
          },
        },
      };
    },
    computed: {
      // 搜尋區塊-隨機背景
      computedBgImg_homeBanner() {
        return this.styleContent.homeBanner.bgImg;
      },
      // dropdown熱門目的地排序
      computedSort_dropdownContent() {
        let sortDropdownContent = this.homeBanner.kkSearch.dropdownContent;
        return sortDropdownContent.sort(function (a, b) {
          if (a.hot === b.hot) {
            //同樣熱門或同樣非熱門的依照searchCount排序
            return b.searchCount - a.searchCount;
          }
          return b.hot - a.hot; //熱門(hot)的排序最前面
        });
      },
    },
    methods: {
      // click搜尋input 顯示dropdown
      clickHandler_searchBlock() {
        this.homeBanner.kkSearch.search_dropdown = !this.homeBanner.kkSearch
          .search_dropdown;
      },
      // 離開搜尋input 關閉dropdown
      hidePanel_searchBlock() {
        this.homeBanner.kkSearch.search_dropdown = false;
      },
    },
  };
</script>