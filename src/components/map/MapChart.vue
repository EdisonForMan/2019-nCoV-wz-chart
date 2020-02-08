<template>
  <div class="MapChart">
    <WZChart v-if="!sub" ref="sup" />
    <SUBChart v-if="sub" ref="sub" :tag="tag" />
  </div>
</template>

<script>
import WZChart from "./WZ/WZ_Chart";
import SUBChart from "./SUB/SUB_Chart";
export default {
  name: "MapChart",
  data: () => {
    return {
      sub: false,
      tag: undefined
    };
  },
  watch: {
    tag(n, o) {
      console.log("[toSub]", n);
      this.sub = n ? true : false;
    }
  },
  components: { WZChart, SUBChart }
};
</script>

<style lang="less" scoped>
.toFather() {
  height: 100%;
  width: 100%;
}
.MapChart {
  .toFather();
}
</style>>