<template>
  <!-- 隱私權政策 -->
  <div
    class="privacyPolicies"
    :style="styleContent.privacyPolicies.bgColor"
  >
    <div :style="styleContent.privacyPolicies.content">
      {{ privacyPolicies.info.content
      }}<a
        :style="styleContent.privacyPolicies.content_a"
        href="#"
      >{{
        privacyPolicies.info.aContent
      }}</a>
    </div>
  </div>
</template>

<script>
  import info from "@/assets/data/privacyPolicies.json";

  export default {
    name: "privacyPolicies",
    data() {
      return {
        privacyPolicies: {
          info,
        },
        styleContent: {
          privacyPolicies: {
            bgColor: { backgroundColor: "#666" },
            content: { color: "#fff", fontSize: "14px" },
            content_a: { color: "#7bdad7" },
          },
        },
      };
    },
  };
</script>
