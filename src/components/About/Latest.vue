<template>
  <!-- 最新優惠 -->
  <section class="latest">
    <div class="container">
      <div class="latestHead">
        <h2 class="title">{{latest.title}}</h2>
      </div>
      <div class="latestCarousel">
        <div class="latestContent">
          <div
            class="contentItem"
            :style="computedStyle_contentItem"
          >
            <div
              v-for="(value, key) of latest.content"
              :key="key"
              class="item"
              :class="methodStyle_item(key)"
            >
              <div class="itemContent">
                <div
                  class="image"
                  :style="'backgroundImage:url('+latest.content[key].img+')'"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="latestBtn">
          <button
            class="btnPN prev btn btn-outline-light"
            :class="classContent.latest.latestBtn_prev"
            @click="methodClick_latestBtn(latest.btnCount +=-1)"
          >&#8249;</button>
          <button
            class="btnPN next btn btn-outline-light"
            :class="classContent.latest.latestBtn_next"
            @click="methodClick_latestBtn(latest.btnCount +=1)"
          >&#8250;</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "latest",
    data() {
      return {
        latest: {
          title: "最新旅遊優惠",
          content: [
            {
              id: 1,
              Introduction: "學校沒教的事",
              img:
                "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210302025458_TF1sQ/jpg",
            },
            {
              id: 2,
              Introduction: "當我們童住一起",
              img:
                "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210222033822_hBIkb/png",
            },
            {
              id: 3,
              Introduction: "台南風格",
              img:
                "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210225083724_vVDQw/jpg",
            },
            {
              id: 4,
              Introduction: "山林系玩家",
              img:
                "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210218030617_lPQG7/png",
            },
            {
              id: 5,
              Introduction: "山林系玩家",
              img:
                "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210218030617_lPQG7/png",
            },
            {
              id: 6,
              Introduction: "山林系玩家",
              img:
                "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210218030617_lPQG7/png",
            },
          ],
          btnCount: 0,
        },
        classContent: {
          latest: {
            latestBtn_prev: { disabled: true },
            latestBtn_next: { disabled: false },
          },
          contentItem: {
            active: true,
          },
        },
        styleContent: {
          latest: {
            contentItem_position: { left: "0%" },
          },
        },
      };
    },
    computed: {
      computedStyle_contentItem() {
        return {
          width:
            "calc( 101% + ( 102% / 3) * " +
            (this.latest.content.length - 3) +
            ")",
          left: this.styleContent.latest.contentItem_position.left,
        };
      },
    },
    methods: {
      methodClick_latestBtn(value) {
        if (this.latest.content.length - 3 >= value) {
          let x =
            (
              ((101 + (102 / 3) * (this.latest.content.length - 3)) /
                this.latest.content.length) *
              value
            ).toString() + "%";
          this.styleContent.latest.contentItem_position.left = "-" + x;
          this.classContent.latest.latestBtn_next.disabled = false;
          this.classContent.latest.latestBtn_prev.disabled = false;
        }
        if (this.latest.content.length - 3 == value) {
          this.classContent.latest.latestBtn_next.disabled = true;
        }
        if (value == 0) {
          this.classContent.latest.latestBtn_prev.disabled = true;
        }
      },
      methodStyle_item(key) {
        if (
          this.latest.btnCount < this.latest.content[key].id &&
          this.latest.content[key].id <= 3 + this.latest.btnCount
        ) {
          return this.classContent.contentItem;
        }
      },
    },
  };
</script>