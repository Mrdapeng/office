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
        <div class="left_chart_title">
          <!--<p class="grass_ratio">毛利率</p>-->
          <!--<p class="trade_ratio">净利率</p>-->
          <select @change="render" v-model="selected" name="profit_tab" id="profit_tab">
            <option v-for="(option,index) in details" :value="index">{{option.select}}</option>
          </select>
        </div>
        <canvas id="canvas"></canvas>
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
  export default {
    /*  year:年
     *   excludingnotanboeps:每股收益-扣除非常性收益
     *  tanboeps 每股收益摊薄
     *
     * */
    data() {
      return {
        year: '2016年-季报',
        report_detail: '营业收入同比增长30%，行业平均增速为18%，领先于行业，营业收入同比增长30%，行业平均增速为18%，领先于行业',
        EPS: 0.56,
        EPS_RATE: '33',
        income: 30,
        profit: 26,
        excludingnotanboeps: '0.45',
        tanboeps: 0.34,
        selected: 0,
        details: [
          {
            select: '毛利率',
            values1: [{x: 50, y: 170}, {x: 70, y: 190}, {x: 80, y: 60}, {x: 100, y: 60}, {x: 140, y: 90}, {
              x: 200,
              y: 20
            }],
            values2: [{x: 36, y: 150}, {x: 57, y: 170}, {x: 89, y: 40}, {x: 95, y: 40}, {x: 136, y: 110}, {
              x: 189,
              y: 20
            }]
          },
          {
            select: '净利率',
            values1: [{x: 35, y: 150}, {x: 50, y: 170}, {x: 94, y: 40}, {x: 90, y: 40}, {x: 130, y: 110}, {
              x: 180,
              y: 20
            }],
            values2: [{x: 30, y: 170}, {x: 50, y: 190}, {x: 90, y: 60}, {x: 110, y: 60}, {x: 160, y: 90}, {
              x: 200,
              y: 20
            }],
          }
        ],
      }
    },
    methods: {

      drawLine: function (cxt, data, isDash) {
        cxt.beginPath()
        for (let i = 1; i < data.length; i++) {
          cxt.moveTo(data[i - 1].x, data[i - 1].y)
          cxt.lineTo(data[i].x, data[i].y)
        }
        cxt.closePath()
        if (isDash) {
          cxt.setLineDash([5])
        } else {
          cxt.setLineDash([0]);
        }
        cxt.strokeStyle = '#ccc'
        cxt.stroke()
      },
      drawText: function (cxt, txt, x, y) {
        cxt.beginPath()
        cxt.font = "10px '宋体'"
        cxt.fillText(txt, x, y)
        cxt.closePath()
      },
      render: function () {
        var canvas = document.getElementById('canvas')
        var context = canvas.getContext('2d')
        var grass = this.details[this.selected].values1
        var tradeGrass = this.details[this.selected].values2
        context.clearRect(0, 0, 350, 239)
        this.drawLine(context, grass, false)
        this.drawLine(context, tradeGrass, true)
        this.drawText(context, this.details[this.selected].select, grass[0].x, grass[0].y + 8);
        this.drawText(context, '行业' + this.details[this.selected].select, tradeGrass[0].x, tradeGrass[0].y - 17);
      }
    },
    mounted() {
      var canvas = document.getElementById('canvas')
      var context = canvas.getContext('2d')
      canvas.width = 350
      canvas.height = 239
      let width = canvas.width
      let height = canvas.height
      if (window.devicePixelRatio) {
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px'
        canvas.height = height * window.devicePixelRatio
        canvas.width = width * window.devicePixelRatio
        context.scale(window.devicePixelRatio, window.devicePixelRatio)
      }
      this.render()
//      function drawLine(cxt, data, isDash) {
//        cxt.beginPath()
//        for (let i = 1; i < data.length; i++) {
//          cxt.moveTo(data[i - 1].x, data[i - 1].y)
//          cxt.lineTo(data[i].x, data[i].y)
//        }
//        cxt.closePath()
//        if (isDash) {
//          cxt.setLineDash([5])
//        } else {
//          cxt.setLineDash([0]);
//        }
//        cxt.strokeStyle = '#ccc'
//        cxt.stroke()
//      }
//
//      function drawText(cxt, txt, x, y) {
//        cxt.beginPath()
//        cxt.font = "10px '宋体'"
//        cxt.fillText(txt, x, y)
//        cxt.closePath()
//      }
//
//      drawLine(context, grass, false)
//      drawLine(context, tradeGrass, true)
//      drawText(context, '行业', grass[0].x, grass[0].y + 8);
//      drawText(context, '资产负债率', tradeGrass[0].x, tradeGrass[0].y - 17);
//      console.log(this.selected)
    }
  }

</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  select {
    /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
    /*很关键：将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    /*在选择框的最右侧中间显示小箭头图片*/
    background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center #d8d8d8;
    border-radius: 5px;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-right: 14px;
  }

  /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
  select::-ms-expand {
    display: none;
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
    /*background: #c00;*/
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
    box-sizing: border-box;
    border: 1px solid #979797;
    position: relative;
    left: 0;
    top: 0;
  }

  .right_chart {
    width: 50%;
    height: 100%;
    float: right;
    box-sizing: border-box;
    border: 1px solid #979797;
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

  .line::after {
    content: "";
    display: inline-block;
    height: 5px;
    width: 76px;
    background: #dadada;
    position: absolute;
    left: 0;
  }

  .grass_ratio {
    position: relative;
    left: 0;
    top: 0;
    background: #d8d8d8;
  }

  .grass_ratio::after {
    content: '';
    position: absolute;
    border-top: 9px solid #fff;
    border-right: 9px solid transparent;
    border-left: 9px solid transparent;
    left: 56px;
    top: 5px;
  }

  .trade_ratio {
    border: 1px solid #ccc;
  }

  .left_chart_title {
    width: 75px;
    position: absolute;
    left: 13px;
    top: 13px;
    font-size: 12px;
    font-weight: 400;
  }
</style>
