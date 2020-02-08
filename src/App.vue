<template>
  <div id="app">
    <header class="app_header">
      <ul class="app_toptab">
        <li
          v-for="(item,index) in toptab"
          :key="index"
          :class="{top_active:index==current}"
          @click="goRoute(item,index)"
        >
          <span>
            <img :src="item.icon" />
            <i>{{item.label}}</i>
          </span>
        </li>
      </ul>
    </header>
    <div class="app_container">
      <router-view ref="router" />
      <transition name="frame"></transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      toptab: [
        {
          label: "防控作战地图",
          name: "Map",
          icon: require("./assets/img/Map.png")
        },
        {
          label: "区域风险评估",
          name: "Risk",
          icon: require("./assets/img/Risk.png")
        },
        {
          label: "疫情趋势分析",
          name: "Analyze",
          icon: require("./assets/img/Analyze.png")
        },
        {
          label: "病例小区分布",
          name: "Estate",
          icon: require("./assets/img/Estate.png")
        }
      ],
      current: 0
    };
  },
  methods: {
    goRoute({ name }, index) {
      this.$router.push({ name, params: { Jump: false } });
      this.current = index;
    }
  }
};
</script>

<style lang="less">
@import url("./assets/css/common.less");

@bg: rgba(7, 39, 80, 1);
@MaxHeight: 60px;
@MaxWidth: 100%;
.box(@size:border-box) {
  box-sizing: @size;
}
.toFather() {
  width: 100%;
  height: 100%;
}
.topLine(@height:100%,@block:inline-block) {
  display: @block;
  vertical-align: top;
  height: @height;
  line-height: 52px;
  text-align: center;
}

#app {
  .toFather();
  background: url(./assets/img/bg.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  .app_header {
    background: url(./assets/img/header.png);
    background-size: 100% 150%;
    height: @MaxHeight;
    padding: 20px 160px;
    > .app_toptab {
      .toFather();
      > li {
        .topLine(@MaxHeight);
        width: @MaxWidth / 4;
        .box();
        padding: 0 10px;
        opacity: 0.65;
        > span {
          .toFather();
          border-radius: 14px;
          background-color: rgb(48, 170, 237);
          font-size: 26px;
          font-weight: 700;
          display: block;
          color: rgb(255, 255, 255);
          cursor: pointer;
          > * {
            display: inline-block;
            height: 28px;
            line-height: 28px;
            vertical-align: middle;
            font-style: normal;
          }
          i {
            margin-left: 10px;
          }
        }
      }
      .top_active {
        opacity: 1 !important;
      }
    }
  }
  .app_container {
    flex: 1;
    > div {
      .toFather();
      position: relative;
    }
  }
}
</style>
