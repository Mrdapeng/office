<template>
  <div class="cash">
    <div class="head">
      <div class="report">
        <p class="title"><strong>报告期:{{year}}</strong></p>
        <p>现金及现金等价物增加额:{{cashincrease}}万元</p>
      </div>
      <div class="cash_flow">
        <p class="title"><strong>每股现金流:{{percashflow}}元</strong></p>
        <p>每股经营活动净现金流{{peropratecash}}元</p>
      </div>
    </div>

    <div class="content">
      <div class="profit_diff">

      </div>
      <div class="report_chart">
        <div class="report_head">
          <p>{{year}}</p>
          <p>查看全部</p>
        </div>
        <div class="report_content">
          <div class="lable">
            <p>经营活动现金流量净额</p>
            <p>投资活动现金流净额</p>
            <p>筹资活动现金流净额</p>
          </div>
          <div class="line">
            <div class="line_items opreate" :style="opreate"></div>
            <div class="line_items invest " :style="invest"></div>
            <div class="line_items financing" :style="finacing"></div>
          </div>
          <div class="detail">
            <div class="detail_item">
              <p>流入30亿(+30%)</p>
              <p>流出26亿(+90%)</p>
              <p>进入26亿(+90%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{

    data(){
      return {
        year: '2016年-季报',
        cashincrease: 12233.34,
        percashflow: 0.85,
        peropratecash: 0.45,
        opreate: {
          background: "#d0021b",
          width:'30px'
        },
        invest: {
          background: "#7ed321",
          width:'30px'

        },
        finacing: {
          background: "#d0021b",
          width:'30px'


        }
      }
    },
    methods: {}
  }

</script>
<style scoped>
  /*invest 投资*/

  * {
    padding: 0;
    margin: 0;
  }

  .title {
    margin-top: 17px;
  }

  .cash {
    width: 100%;
    height: 325px;
    background: #ccc;
  }

  .head {
    width: 100%;
    height: 81px;
    background: #0cc;
  }

  .report {
    width: 50%;
    height: 100%;
    float: left;
    background: #c00;
  }

  .report p {
    width: 100%;
    font-size: 12px;
    font-weight: 200;
    text-align: left;
  }

  .cash_flow {
    width: 50%;
    height: 100%;
    float: right;
  }

  .cash_flow p {
    width: 100%;
    font-size: 12px;
    font-weight: 200;
    text-align: left;
    margin-left: 70px;
  }

  .content {
    width: 100%;
    height: 240px;
    background: #00f;
  }

  .profit_diff {
    float: left;
    width: 50%;
    height: 100%;
    background: #000;
  }

  .report_chart {
    width: 50%;
    float: right;
    height: 100%;
    background: #ccc;
  }

  .report_head {
    height: 50px;
    line-height: 50px;
    font-size: 13px;
    font-weight: 400;
  }

  .report_head p {
    float: left;
  }

  .report_head p:last-child {
    float: right;
  }

  .lable {
    float: left;
    width: 50%;
    text-align: left;
    border-right: 1px dashed rgba(0, 0, 0, 0.5);
  }

  .lable p {
    font-size: 12px;
    font-weight: 200;
    margin-left: 29px;
    margin-top: 48px;
  }

  .lable p:first-child {
    margin-top: 0;
  }

  .detail {
    width: 100px;
    float: right;
    height: 100%;
  }

  .detail p {
    font-size: 12px;
    font-weight: 200;
    text-align: right;
    margin-top: 49px;
  }

  .detail p:first-child {
    margin-top: 0;
  }

  .report_content {
    width: 100%;
    height: 190px;
    position: relative;
    left: 0;
    top: 0;
  }

  .line_items {
    height: 5px;
    position: absolute;
  }

  .opreate {
    top: 21px;
    left: 176px;
    background: #d0021b;
  }

  .invest {
    top: 80px;
    left: 146px;
    background: green;
  }

  .financing {
    top: 140px;
    left: 176px;
    background: #d0021b;
  }
</style>
