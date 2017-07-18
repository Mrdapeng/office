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
          <p class="debt_ratio_title">资产负债率</p>
          <p class="Equity_Ratio">股东权益比率</p>
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
      }
    },
    mounted() {
      /*Industry_average
      *行业平均资产负债率
      * Industry_average
      * 资产负债率
      * */
      var Industry_average = [{x: 30, y: 170}, {x: 60, y: 190}, {x: 89, y: 140}, {x: 110, y: 170}, {
        x: 150,
        y: 200
      }, {x: 170, y: 220}, {x: 190, y: 200}, {x: 220, y: 230}]
      var ratio_liabilities = [{x: 30, y: 140}, {x: 60, y: 150}, {x: 89, y: 110}, {x: 110, y: 160}, {
        x: 150,
        y: 158
      }, {x: 170, y: 106}, {x: 190, y: 190}, {x: 220, y: 199}]

      var canvas = document.getElementById('canvas')
      canvas.width = 350
      canvas.height = 239
      var context = canvas.getContext('2d')
      let width = canvas.width
      let height = canvas.height
      if(window.devicePixelRatio){
        canvas.style.width=width+'px'
        canvas.style.height=height+'px'
        canvas.height=height*window.devicePixelRatio
        canvas.width=width*window.devicePixelRatio
        context.scale(window.devicePixelRatio,window.devicePixelRatio)
        console.log('i am run')
      }




      function drawLine(data, cxt, isDash) {
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
        cxt.strokeStyle = '#b9b9d9'
        cxt.stroke()

      }


      function drawText(cxt, txt, x, y) {
        cxt.beginPath()
        cxt.font = '30px serif #000'
        cxt.fillText(txt, x, y)
        cxt.closePath()
      }

      function getBeveling(x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      }

      function drawDashLine(context, x1, y1, x2, y2, dashLen) {
        dashLen = dashLen === undefined ? 5 : dashLen;
        //得到斜边的总长度
        var beveling = getBeveling(x2 - x1, y2 - y1);
        //计算有多少个线段
        var num = Math.floor(beveling / dashLen);

        for (var i = 0; i < num; i++) {
          context[i % 2 == 0 ? 'moveTo' : 'lineTo'](x1 + (x2 - x1) / num * i, y1 + (y2 - y1) / num * i);
        }
        context.stroke();
      }

      drawLine(Industry_average, context, false)
      drawLine(ratio_liabilities, context, true)
      drawText(context, '行业平均资产负债率', Industry_average[0].x, Industry_average[0].y + 8);
      drawText(context, '资产负债率', ratio_liabilities[0].x, ratio_liabilities[0].y - 17);
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
