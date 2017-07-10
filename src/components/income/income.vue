<template>
  <div class="income">
    <div class="report">
      <div class="title">
        <strong><span>报告期{{yearly}}年-季报</span></strong>
      </div>
      <div class="financial_analysis">
        <p class="sub_title">财务分析</p>
        <div class="financial_items">
          <div class="small_item">
            <p>ROE: {{ROE}}</p>
            <p>速动比率:{{QR}}</p>
          </div>
          <div class="small_item">
            <p>ROE: {{ROA}}</p>
            <p>EPS同比增长率:{{EPS}}</p>
          </div>
          <div class="small_item">
            <p>ROE: {{ROIC}}</p>
            <p>速动比率:{{turnover}}</p>
          </div>
        </div>

      </div>
      <div class="core_analysis">
        <p class="sub_title">核心财务指标</p>
        <div class="financial_items">
          <div class="small_item">
            <p>营收同比增长: {{revenue}}</p>
            <p>净利润同比增长: {{progit_up}}</p>
          </div>
          <div class="small_item">
            <p>毛利率: {{grass}}</p>
            <p>净利率: {{profit}} </p>
          </div>
          <div class="small_item">
            <p>每股资本公积：{{capital_reserves}}</p>
            <p>每股未分配利润：{{turnover}}</p>
          </div>
        </div>

      </div>
    </div>
    <div class="skill">
      <div class="skill_item">
        <div class="skill_detail">
          <p><strong>盈利能力</strong></p>
          <span>净利润增长率:{{ProfitGrowthRate}}%</span><span
          :class="quotations(ProfitGrowthRate).class">同比{{quotations(ProfitGrowthRate).text}}显著</span>
        </div>
        <div class="skill_detail">
          <p><strong>偿债能力</strong></p>
          <span>流动比率:{{liquidratio}}%</span><span
          :class="quotations(liquidratio).class">同比{{quotations(liquidratio).text}}显著</span>
        </div>
      </div>
      <div class="skill_item">
        <div class="skill_item">
          <div class="skill_detail">
            <p><strong>营运能力</strong></p>
            <span>固定资产周转率:{{fixedassets}}%</span><span
            :class="quotations(fixedassets).class">同比{{quotations(fixedassets).text}}显著</span>
          </div>
          <div class="skill_detail">
            <p><strong>发展能力</strong></p>
            <span>净利润同比增长:{{Netprofitrose}}%</span><span
            :class="quotations(Netprofitrose).class">同比{{quotations(Netprofitrose).text}}显著</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    /*QR 速动比率*
     turnover总资产周转率
     revenue 营收同比增长
     reserves 每股资本公积
     profit 净利率
     capital reserves 每股资本公积
     Undistributed profit 每股未分配利润
     capacity 营业能力
     debt 偿债能力
     ability 营运能力
     Development 发展能力
     Profit Growth Rate 净利润增长率
     liquidratio 流动比率
     fixed assets： 固定资产周转率
     Netprofitrose 净利润同比增长
     quotations 行情，控制显示红绿背景
     */
    data(){
      return {
        yearly: 2016,
        ROE: 8.32,
        QR: 1.2,
        ROA: 3.45,
        EPS: 12.12,
        ROIC: 6.32,
        turnover: 23.34,
        grass: 23.34,
        reserves: 1.45,
        profit: 12.34,
        progit_up: 12.34,
        capital_reserves: 1.45,
        Undistributed_profit: 2.34,
        revenue: '30',
        Netprofitrose: 12,
        fixedassets: 1.3,
        ProfitGrowthRate: 56,
        liquidratio: 1.3

      }
    },
    methods: {
      quotations(num){
        if (num >= 50) {
          return {
            text: '提高',
            class: 'red'
          }
        } else {
          return {
            text: "下降",
            class: 'green'
          }
        }
      }
    },

  }

</script>
<style scoped>
  /*财务分析
  financial analysis;
  */
  * {
    margin: 0;
    padding: 0;
  }

  .red {
    background: #ffcccc;
  }

  .green {
    background: #d5f0b7;
  }

  .core {
    width: 100%;
    height: 46px;
    display: flex;
    /*background: #dad;*/
    margin-top: 30px;
  }

  .sub_title {
    text-align: left;
  }

  .financial_analysis {
    width: 100%;
    height: 50px;
    margin-top: 4px;
    /*background: #ded;*/
    font-size: 0.4em;
    margin-left: 21px;
    text-align: left;
  }

  .core_analysis {
    width: 100%;
    height: 50px;
    margin-top: 29px;
    /*background: #ded;*/
    font-size: 0.4em;
    margin-left: 21px;
  }

  .financial_items {
    display: flex;
    height: 100%;
  }

  .small_item:first-child {
    margin-left: 0;
  }

  .small_item {
    max-width: 132px;
    text-align: left;
    margin-left: 60px;
    white-space: nowrap;
  }

  .income {
    width: 702px;
    margin-top: 9px;
    height: 418px;
    position: relative;
    top: 0;
    left: 0;
    background: #ffffff;
    /*border: 1px solid #000;*/
  }

  .report {
    width: 100%;
    height: 174px;
    top: 0;
    position: absolute;
    border: 1px solid #000;
    /*background: #ccc;*/
  }

  .skill {
    width: 100%;
    height: 134px;
    position: absolute;
    bottom: 0;
    border: 1px solid #000;
    /*background: #cde;*/
    display: flex;
  }

  .skill_item {
    flex: 1;
    height: 100%;
    /*background: #000;*/
  }

  .title {
    height: 22px;
    /*background: #ced;*/
    text-align: left;
  }

  .title span {
    margin-left: 6px;
  }

  .skill_detail {
    width: 100%;
    font-size: 0.9em;
    text-align: center;
  }

  .skill_item p {
    text-align: left;
    margin-left: 35px;
    margin-bottom: 10px;
  }


</style>
