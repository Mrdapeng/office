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
        <div class="debt_title">
          <!--<p class="debt_ratio_title">资产负债率</p>-->
          <!--<p class="Equity_Ratio">股东权益比率</p>-->
          <select @change="render" v-model="selected" name="profit_tab" id="profit_tab">
            <option v-for="(option,index) in details" :value="index">{{option.select}}</option>
          </select>
        </div>
        <canvas id="canvas" style="border: 1px solid #979797;"></canvas>
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
  export default {
    data() {
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
        details: [
          {
            select: '资产负债率',
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
            select: '行业平均资产负债率',
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
        selected: 0
      }
    },
    mounted() {
      /*Industry_average
      *行业平均资产负债率
      * Industry_average
      * 资产负债率
      * */
      var canvas = document.getElementById('canvas')
      canvas.width = 350
      canvas.height = 239
      var context = canvas.getContext('2d')
      let width = canvas.width
      let height = canvas.height
      if (window.devicePixelRatio) {
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px'
        canvas.height = height * window.devicePixelRatio
        canvas.width = width * window.devicePixelRatio
        context.scale(window.devicePixelRatio, window.devicePixelRatio)
        console.log('i am run')
      }
      this.render()

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
      },
      drawLine: function (cxt, data, isDash) {
        cxt.beginPath()
        for (let i = 1; i < data.length; i++) {
          cxt.moveTo(data[i - 1].x, data[i - 1].y)
          cxt.lineTo(data[i].x, data[i].y)
        }
        if (isDash) {
          cxt.setLineDash([5])
        } else {
          cxt.setLineDash([0]);
        }
        cxt.closePath()
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
        var debt = this.details[this.selected].values1
        var gradedebt = this.details[this.selected].values2
        context.clearRect(0, 0, 350, 239)
        this.drawLine(context, debt, false)
        this.drawLine(context, gradedebt, true)
        this.drawText(context, '行业平均资产负债率', debt[0].x, debt[0].y + 8);
        this.drawText(context, '资产负债率', gradedebt[0].x, gradedebt[0].y - 17);
      }
    },
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
    outline: 0;
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
    /*background: #ccc;*/
  }

  .debt_chart {
    float: left;
    width: 50%;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
  }

  .debt_title {
    position: absolute;
    left: 13px;
    font-size: 12px;
  }

  .debt_ratio_title {
    border-radius: 5px;
    background: #d8d8d8;
    position: relative;
    width: 98px;
    text-align: center;
    text-indent: -20px;
    left: 0;
    top: 0;
  }

  .debt_ratio_title::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 9px solid #ffffff;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    top: 5px;
    left: 80px;

  }

  .Equity_Ratio {
    text-indent: 7px;
    border: 1px solid #cccccc;
    position: relative;
    left: 0;
    top: 0;
  }

  .Equity_Ratio::after {
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    background: #1c1c1c;
    border-radius: 2px;
    left: 8px;
    top: 8px;
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
    /*background: #c00;*/
  }

  .debt_chart {

  }

  .debt {
    width: 50%;
    height: 100%;
    float: right;
    /*background: #cdf00f;*/
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
