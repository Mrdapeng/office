<template>
  <div class="cashflow">
    <div class="head">
      <div class="report">
        <p><strong>报告期:{{season}}</strong></p>
        <p class="_detail">{{report_detail}}</p>
      </div>
      <div class="evaluate">
        <p><strong>资产与资产结构评估:{{type}}</strong></p>
        <p class="_detail">{{type_detail}}</p>
      </div>
    </div>
    <div class="content">
      <div class="debt_chart">

      </div>
      <div class="report_chart">
        <div class="chart_head">
          <span class="season">{{season}}</span>
          <span class="show_all">查看全部</span>
        </div>
        <div class="totalMoney">
          <span>资产总计:{{totalmoney}}亿</span>
        </div>
        <div class="chart_content">
          <div class="property">
            <p>资产</p>
            <div class="property_item">
              <span :style="flow">流动资产</span>
              <span :style="unflow">流动资产</span>
            </div>
          </div>
          <div class="debt">
            <p>负债和所有者权益</p>
            <div class="property_item">
              <span :style="flow">流动资产</span>
              <span :style="unflow">流动资产</span>
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
        season: '2016年季报',
        report_detail: '总资产同比增长30%，行业平均增速为18%，领先于行业，净资产同比增长31%，行业平均曾速为12%，领先于行业',
        type: '风险型结构',
        type_detail: '流动资产<流动负债，该公司使用短期资金投资了长期资产，将面临一定的财务风险，请留意。',
        totalmoney: '854',
        flow: {
          height: '50px',
          lineHeight: '50px',
          borderRight: '82px solid #f0eeee'

        },
        unflow: {
          height: '80px',
          lineHeight: '80px',
          borderRight: '82px solid #bdbcbc'

        }
      }
    },
    methods: {}
  }

</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .cashflow {
    width: 704px;
  }

  .report {
    width: 50%;
    float: left;
    height: 100%;
  }

  .report p {
    font-size: 12px;
    height: 12px;
    text-align: left;
    margin-right: 41px;
  }

  .evaluate {
    width: 50%;
    float: right;
    height: 100%;
  }

  .evaluate p {
    font-size: 12px;
    height: 12px;
    text-align: left;
    margin-left: 60px;
  }

  ._detail {
    font-size: 0.6em;
    text-align: left;
    word-break: break-all;
  }

  .head {
    width: 100%;
    height: 45px;
    margin-top: 19px;
    margin-bottom: 19px;
    background: #edc;
  }

  .content {
    width: 100%;
    height: 241px;
    background: #ccc;
  }

  .debt_chart {
    float: left;
    width: 50%;
    height: 100%;
    background: #000;
  }

  .report_chart {
    width: 43%;
    float: right;
    height: 100%;
    margin: 0 23px;
    font-size: 12px;
  }

  .chart_head {
    width: 100%;
    height: 38px;
    line-height: 38px;
    font-weight: 400;
  }

  .season {
    float: left;
  }

  .show_all {
    float: right;
  }

  .totalMoney {
    width: 100%;
    box-sizing: content-box;
    text-align: left;
    font-weight: 200;
  }

  .chart_content {
    width: 100%;
    height: 186px;

  }

  .property {
    width: 50%;
    height: 100%;
    float: left;
    background: #c00;
  }

  .debt {
    width: 50%;
    height: 100%;
    float: right;
    background: #cdf00f;
  }

  .property_item {
    margin-top: 12px;
  }

  .property_item span {
    display: inline-block;
    /*height: 50px;*/
    /*line-height: 50px;*/
    position: relative;
    left: 0;
    top: 0;
  }
  .property_item span::after{
    position: absolute;
    content: '38';
    left: 50%;
    top: 50%;
    margin-left: -6px;
    margin-top: -40px;
  }
</style>
