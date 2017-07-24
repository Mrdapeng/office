<template>
  <div>
    <div class="title">
      <div class="report">
        <span>报告期:</span><span class="year">{{year}}</span>
      </div>
    </div>
    <div class="detail">

      <div class="left_part">
        <div class="pe item">
          <ul class="detail_list">
            <li class="col1">
              <p>PE法</p>
            </li>
            <li class="col2">
              <p>公司PE</p>
              <P>{{officePE}}</P>
            </li>
            <li class="col3">
              <p>
                行业PE
              </p>
              <p>{{tradePE}}</p>
            </li>
            <li class="col4">
              <p>每股收益</p>
              <p>{{perIncome}}</p>
            </li>
            <li class="col5">
              <p>行业水平对应估值</p>
              <p>{{tradeForeCast}}元</p>
            </li>
          </ul>
        </div>
        <div class="pb item">
          <ul class="detail_list">
            <li class="col1">
              <p>PB法</p>
            </li>
            <li class="col2">
              <p>公司PB</p>
              <span>{{officePE}}元</span>
            </li>
            <li class="col3">
              <p>
                行业PB
              </p>
              <p>{{tradePE}}</p>
            </li>
            <li class="col4">
              <p>每股收益</p>
              <p>{{perIncome}}</p>
            </li>
            <li class="col5">
              <p>行业水平对应估值</p>
              <p>{{tradeForeCast}}元</p>
            </li>
          </ul>
        </div>
        <div class="ps item">
          <ul class="detail_list">
            <li class="col1">
              <p>PS法</p>
            </li>
            <li class="col2">
              <p>公司PS</p>
              <span>{{officePE}}</span>
            </li>
            <li class="col3">
              <p>
                行业PS
              </p>
              <p>{{tradePE}}</p>
            </li>
            <li class="col4">
              <p>每股收益</p>
              <p>{{perIncome}}</p>
            </li>
            <li class="col5">
              <p>行业水平对应估值</p>
              <p>{{tradeForeCast}}元</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="right_part">
        <!--<showline></showline>-->
        <forechart></forechart>
      </div>
    </div>

  </div>
</template>
<script>
  import showline from '../line/show_line.vue'
  import  forechart from './forecast/forecastChart.vue'
  export default{
    data(){
      return {
        year: '2016年—季报',
        officePE: '34.3',
        tradePE: '27.2',
        perIncome: '1.99',
        tradeForeCast: '54.12',
        tableData: [{
          label: 'PE法',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    components: {
      showline,
      forechart

    },
    methods: {}

  }

</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  .col1 {
    width: 11%;
  }

  .col2 {
    width: 17%;
  }

  .col3 {
    width: 19%;
  }

  .col4 {
    width: 21%;
  }

  .col5 {
    width: 31%;
  }

  .title {
    width: 705px;
    height: 58px;
    text-align: left;
    background: #fff;
    overflow: hidden;
    white-space: nowrap;
  }

  .left_part {
    float: left;
    width: 372px;
    margin-top: 28px;
    height: 100%;
  }

  .right_part {
    float: left;
    width: 328px;
    height: 100%;
    /*background: #ccc;*/
  }

  .main {
    width: 100%;
    height: 242px;
  }

  .item {
    width: 340px;
    height: 73px;
    /*background: #eee;*/
    font-size: 8px;
  }

  .report {
    font-size: 12px;
    width: 123px;
    margin-top: 26px;
  }

  li[class*='col1'] > p {
    color: #f7b444;
  }

  .year {
    margin-left: 8px;
  }

  .detail {
    max-width: 710px;
    height: 238px;
    /*box-sizing: content-box;*/
    border: 1px solid #979797;
    overflow: hidden;
    /*margin-top: 28px;*/
    /*background: #000;*/
    margin-bottom: 14px;
  }

  .detail .item {
    height: 69px;
    border-bottom: 1px solid #eaeaea;
  }

  .detail_list {
    width: 344px;
    float: left;
    height: 100%;
  }



  .detail_list li:nth-child(odd) {
    background: #f9f9f9;
  }

  .detail_list li:nth-child(even) {
    background: #ffffff;
  }

  .detail_list p {
    white-space: nowrap;
  }

  .detail_list li {
    height: 70px;
    line-height: 30px;
    float: left;
  }


</style>
