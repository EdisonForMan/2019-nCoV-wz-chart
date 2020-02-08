<template>
  <div class="SUB_DATA">
    <div class="TOP_BACK" @click="()=>{$parent.$parent.tag=null}">返回</div>
    <div class="TOP_DATA">
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
    <div class="BOTTOM_FLAG">
      <div>
        <div class="RED_FLAG" />
        <div>
          <span>今日红旗转白旗乡镇数</span>
          <span>01</span>
          <span>个</span>
        </div>
        <div>
          <span>累计红旗转白旗乡镇数</span>
          <span>10</span>
          <span>个</span>
        </div>
      </div>
      <div>
        <div class="WHITE_FLAG" />
        <div>
          <span>今日白旗转红旗乡镇数</span>
          <span>02</span>
          <span>个</span>
        </div>
        <div>
          <span>累计白旗转红旗乡镇数</span>
          <span>38</span>
          <span>个</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SUB_DATA",
  props: ["data"],
  data: () => {
    return {
      ill: 0,
      cure: 0
    };
  },
  mounted() {
    let ill = 0,
      cure = 0;
    this.data.map(({ value }) => {
      ill += value;
      cure += value;
    });
    this.ill = ill;
    this.cure = cure;
  }
};
</script>

<style lang="less" scoped>
.SUB_DATA {
  .TOP_BACK {
    position: absolute;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    font-weight: 700;
    width: 100px;
    background: url(./icon/back.png);
    background-size: cover;
    color: white;
    cursor: pointer;
    text-align: right;
    box-sizing: border-box;
    padding-right: 16px;
    top: -80px;
    left: 50px;
    opacity: 0.8;
  }
  .TOP_DATA {
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
  /** 旗子 */
  .BOTTOM_FLAG {
    position: absolute;
    z-index: 2;
    left: 40px;
    bottom: 80px;
    width: 600px;
    > div {
      height: 50px;
      font-size: 20px;
      font-weight: 900;
      color: yellow;
      position: relative;
      .RED_FLAG {
        position: absolute;
        bottom: 0px;
        height: 110px;
        width: 132px;
        background: url(./icon/rflag.png);
        background-size: cover;
      }
      .WHITE_FLAG {
        position: absolute;
        bottom: 0px;
        height: 110px;
        width: 132px;
        background: url(./icon/wflag.png);
        background-size: cover;
      }
      > div {
        width: 220px;
        display: inline-block;
        float: left;
        span {
          display: inline-block;
          height: 50px;
          vertical-align: top;
        }
        > span:first-child {
          height: 25px;
          line-height: 25px;
          width: 100px;
        }
        > span:nth-child(2) {
          height: 50px;
          font-size: 44px;
          line-height: 50px;
          margin: 0 10px;
        }
        > span:last-child {
          height: 50px;
          font-size: 22px;
          line-height: 50px;
        }

        .red {
          color: red;
        }
        .blue {
          color: rgb(0, 160, 233);
        }
      }
      > div:nth-child(2) {
        margin-left: 60px;
        margin-right: 20px;
      }
      > div:nth-child(2):after {
        content: "";
        display: block;
        float: right;
        width: 2px;
        height: 50px;
        background-color: white;
      }
    }
    > div:first-child {
      margin-bottom: 80px;
      span:nth-child(2) {
        color: red;
      }
    }
    > div:last-child {
      span:nth-child(2) {
        color: rgb(0, 160, 233);
      }
    }
  }
}
</style>