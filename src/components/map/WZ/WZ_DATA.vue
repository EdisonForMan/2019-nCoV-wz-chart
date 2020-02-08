<template>
  <div class="WZ_DATA">
    <div>
      <div>累计确诊病例</div>
      <div>
        <i class="ill">{{ill}}</i> 例
      </div>
    </div>
    <div>
      <div>累计出院病例</div>
      <div>
        <i class="cure">{{cure}}</i> 例
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { qzrs, zyrs } from "../data/mapData";

export default {
  name: "WZ_DATA",
  props: ["data"],
  data: () => {
    return {
      ill: 0,
      cure: 0,
      qzrs,
      zyrs
    };
  },
  mounted() {
    // let ill = 0,
    //   cure = 0;
    // this.data.map(({ value }) => {
    //   ill += Number(value[2]);
    //   cure += Number(value[3]);
    // });
    // this.ill = ill;
    // this.cure = cure;

    this.qzrs
      .filter(item => item["区县"] == "总计")
      .map(item => {
        this.ill = item["确诊统计数"];
      });

    this.zyrs
      .filter(item => item["所属区县"] == "总计")
      .map(item => {
        this.cure = item["治愈数量"];
      });
  }
};
</script>

<style lang="less" scoped>
.WZ_DATA {
  position: absolute;
  z-index: 2;
  top: 40px;
  left: 40px;
  > div {
    height: 90px;
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 20px;
    color: rgb(255, 255, 255);
    width: 200px;
    div {
      margin-left: 30px;
      i {
        font-style: normal;
      }
    }
    > div:first-child {
      height: 30px;
      line-height: 30px;
    }
    > div:last-child {
      height: 60px;
      font-size: 44px;
      line-height: 60px;
    }
    .ill {
      color: rgb(254, 93, 25);
    }
    .cure {
      color: rgb(110, 139, 255);
    }
  }
  > div:before {
    content: "";
    display: block;
    height: 100%;
    width: 12px;
    background-color: rgb(0, 203, 254);
    float: left;
  }
}
</style>