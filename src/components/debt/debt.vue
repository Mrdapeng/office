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
              <div class="flow" :style="getflow()">
                <p>流动资产</p>
                <p>({{flowpercent * 100}})%</p>
              </div>
              <div class="unflow" :style="getunflow()">
                <p>非流动资产</p>
                <p>({{unflowpercent * 100}})%</p>
              </div>
            </div>
          </div>
          <div class="debt">
            <p>负债和所有者权益</p>
            <div class="property_item">
              <!--<span :style=getflow()>流动资产</span>-->
              <!--<span :style="unflow">流动资产</span>-->
              <div class="flow" :style="getflowdebt()">
                <p>流动负债</p>
                <p>({{flowdebt * 100}})%</p>
              </div>
              <div class="unflow" :style="getlongdebt()">
                <p>非流动资产</p>
                <p>({{longdebt * 100}})%</p>
              </div>
              <div class="unflow" :style="getowerdebt()">
                <p>所有者权益</p>
                <p>({{owerdebt * 100}})%</p>
              </div>
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
        flowpercent: 0.35,
        unflowpercent: 0.65,
        flowdebt: 0.3,
        longdebt: 0.3,
        owerdebt: 0.4,
      }
    },
    methods: {
      getflow: function () {
        return {
          height: this.flowpercent * 126 + 'px',
          lineHeight: this.flowpercent * 126 + 'px',
          borderRight: '82px solid #f0eeee',
          borderBottom: '1px solod #fff'

        }
      },
      getunflow: function () {
        return {
          height: this.unflowpercent * 126 + 'px',
          lineHeight: this.unflowpercent * 126 + 'px',
          borderRight: '82px solid #bdbcbc'
        }
      },
      getflowdebt: function () {
        return {
          height: this.flowdebt * 126. + 'px',
          lineHeight: this.flowdebt * 126 + 'px',
          borderLeft: '82px solid #f0eeee',
        }
      },
      getlongdebt: function () {
        return {
          height: this.longdebt * 126 + 'px',
          lineHeight: this.longdebt * 126 + 'px',
          borderLeft: '82px solid #bdbcbc',

        }
      },
      getowerdebt: function () {
        return {
          height: this.owerdebt * 126 + 'px',
          lineHeight: this.owerdebt * 126 + 'px',
          borderLeft: '82px solid #bdbcbc'
        }
      }
    },

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

  .property_item p {
    height: 12px;
    font-size: 0.6em;
    font-weight: 200;
  }

  .property_item span {
    display: inline-block;
    position: relative;
    left: 0;
    top: 0;
  }

  .property .flow {
    margin-right: 6px;
  }

  .property .unflow {
    margin-right: 6px;
  }


  .debt .flow {
    margin-left: 6px;
  }

  .debt .unflow {
    margin-left: 6px;
  }

</style>
