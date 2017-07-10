<template>
  <div class="profit">
    <div class="report">
      <div class="report_items year_report">
        <p class="title">报告期:{{year}}</p>
        <p class="detail">{{report_detail}}</p>
      </div>
      <div class="report_items income">
        <p class="title">每股收益（EPS:{{EPS}}元)(+{{EPS_RATE}})%</p>
        <p>每股收益－扣除非常性损益:{{excludingnotanboeps}}元</p>
        <p>每股收益－摊薄: {{tanboeps}}元</p>
      </div>
    </div>
    <div class="chart">
      <div class="left_chart">
      </div>
      <div class="right_chart">
        <div class="right_items operating">
          <div class="operate_top">
            <div class="operating_title">
              <span>{{year}}</span>
            </div>
            <div class="show_all">
              <span>查看全部</span>
            </div>
          </div>
          <div class="middle">
            <div class="bussiness_item item1">
              <ul>
                <li>
                  <span>营业收入</span>
                </li>
                <li>
                  <div class="line"></div>
                </li>
                <li>
                  <span>{{income}}亿</span>
                </li>
              </ul>
            </div>

            <div class="bussiness_item item2">
              <ul>
                <li>
                  <span>营业收入</span>
                </li>
                <li>
                  <div class="line"></div>
                </li>
                <li>
                  <span>{{income}}亿</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div class="right_items right_profit">
          <div class="operate_top">
            <div class="operating_title">
              <span>{{year}}</span>
            </div>
            <div class="show_all">
              <span>查看全部</span>
            </div>
          </div>
          <div class="middle">
            <div class="bussiness_item item1">
              <ul>
                <li>
                  <span>营业收入</span>
                </li>
                <li>
                  <div class="line"></div>
                </li>
                <li>
                  <span>{{income}}亿</span>
                </li>
              </ul>
            </div>

            <div class="bussiness_item item2">
              <ul>
                <li>
                  <span>营业收入</span>
                </li>
                <li>
                  <div class="line"></div>
                </li>
                <li>
                  <span>{{income}}亿</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    /*  year:年
     *   excludingnotanboeps:每股收益-扣除非常性收益
     *  tanboeps 每股收益摊薄
     *
     * */
    data(){
      return {
        year: '2016年-季报',
        report_detail: '营业收入同比增长30%，行业平均增速为18%，领先于行业，营业收入同比增长30%，行业平均增速为18%，领先于行业',
        EPS: 0.56,
        EPS_RATE: '33',
        income: 30,
        profit: 26,
        excludingnotanboeps: '0.45',
        tanboeps: 0.34
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

  .title {
    font-weight: bold;
  }

  .profit {
    width: 100%;
    /*background: #000;*/
  }

  .report {
    display: flex;
    height: 94px;
    background: #c00;
    font-size: 0.8em;
  }

  .report_items {
    flex: 1;
    text-align: left;
    font-size: 10px;
    word-break: break-all;
    margin-top: 28px;
  }

  .year_report {
    margin-right: 38px;

  }

  .income {
    margin-left: 72px;
  }

  .chart {
    width: 100%;
    height: 241px;
  }

  .left_chart {
    width: 50%;
    height: 100%;
    /*background: #000;*/
    float: left;
  }

  .right_chart {
    width: 50%;
    height: 100%;
    float: right;
    /*background: #ccc;*/
  }

  .operating {
    width: 100%;
    height: 82px;
    /*background: #aca;*/
    margin-top: 16px;
    margin-bottom: 36px;
  }

  .right_profit {
    width: 100%;
    height: 92px;
    /*background: #3cb;*/
    margin-bottom: 17px;
  }

  .operating_title {
    float: left;
  }

  .show_all {
    float: right;
  }

  .operate_top {
    width: 100%;
    height: 38px;
    line-height: 48px;
    font-size: 0.6em;
  }

  .middle {
    height: 50px;
    font-size: 12px;
    position: relative;
    left: 0;
    top: 0;
  }

  .bussiness_item {
    position: absolute;
    height: 25px;
    width: 100%;
  }

  .item1 {
    left: 0;
    top: 0;
  }

  .item2 {
    top: 25px;
    left: 0;
  }

  .bussiness_item ul {
    width: 100%;
    height: 25px;
    line-height: 25px;
    list-style: none;
    /*background: #ccc;*/
  }

  .bussiness_item ul li {
    height: 100%;
    float: left;

  }

  .line {
    width: 141px;
    height: 5px;
    margin-top: 10px;
    background: #ffffff;
    position: relative;
    border: 1px solid #ededed;
    margin-left: 10px;
    margin-right: 12px;
    left: 0;
    top: 0;
  }
  .line::after{
    content: "";
    display: inline-block;
    height: 5px;
    width: 76px;
    background: #dadada;
    position: absolute;
    left: 0;
  }
</style>
