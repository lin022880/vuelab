<template>
  <!-- 版權 -->
  <div class="copyright">
    {{ copyright.info.title }} © {{ copyright.year }}
    {{ copyright.info.content }}
  </div>
</template>

<script>
  import info from "@/assets/data/copyright.json";

  export default {
    name: "copyright",
    data() {
      return {
        copyright: {
          year: new Date().getFullYear(),
          info,
        },
      };
    },
  };
</script>
