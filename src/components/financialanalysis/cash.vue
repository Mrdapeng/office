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
        <p class="d">净利润及经营现金流对比</p>
        <canvas style="我0" id="diff" class="diff"></canvas>
        <div id="notes">
          <p class="note_item">该报告以下科目</p>
          <p class="note_item"> 存货的减少:-6.12亿(+213%)</p>
          <p class="note_item">可能为净利润与经营现金流差异的主要原因</p>
        </div>
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
              <p>流入{{flowin}}亿(+{{flowin_percent}})</p>
              <p>流出{{flowout}}亿(+{{flowout_percent}})</p>
              <p>进入{{income}}亿(+{{income_percent}})</p>
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
        flowin: 30,
        flowout: 26,
        income: 26,
        flowin_percent: 30 + '%',
        flowout_percent: 90 + '%',
        income_percent: 90 + '%',
        opreate: {
          background: "#d0021b",
          width: '30px'
        },
        invest: {
          background: "#7ed321",
          width: '30px'

        },
        finacing: {
          background: "#d0021b",
          width: '30px'

        }
      }
    },
    methods: {},
    mounted(){
      var data1 = [{x: 22, y: 77}, {x: 57, y: 44}, {x: 90, y: 72}, {x: 100, y: 22}, {x: 180, y: 46}, {x: 300, y: 20}]
      var data2 = [{x: 22, y: 107}, {x: 57, y: 94}, {x: 90, y: 122}, {x: 100, y: 110}, {x: 180, y: 130}, {
        x: 300,
        y: 60
      }]
      var canvas = document.getElementById('diff')
      canvas.width = 350
      canvas.height = 206
      var cxt = canvas.getContext('2d')
      var notes=['该报告期以下科目','存货的减少-6.12亿()','']
      function draw_line(data) {
        cxt.beginPath()

        for (var i = 1; i < data.length; i++) {
          cxt.moveTo(data[i - 1].x, data[i - 1].y)
          cxt.lineTo(data[i].x, data[i].y)
        }
        cxt.closePath()
        cxt.strokeStyle = '#000'
        cxt.stroke()
      }

      function drawLineRect(x, y, w, h, cxt) {
        cxt.beginPath()
        cxt.Rect(x, y, w, h)
        cxt.closePath()
        cxt.stroke()


      }


      function drawText(text, x, y, cxt) {
        cxt.beginPath()
        cxt.font = "30px serif #000";
        cxt.fillText(text, x, y)
        cxt.closePath()
      }

      function canvasTextAutoLine(str, canvas, initX, initY, lineHeight) {
        var ctx = canvas.getContext("2d");
        var lineWidth = 0;
        var canvasWidth = c.width;
        var lastSubStrIndex = 0;
        for (let i = 0; i < str.length; i++) {
          lineWidth += ctx.measureText(str[i]).width;
          if (lineWidth > canvasWidth - initX) {//减去initX,防止边界出现的问题
            ctx.fillText(str.substring(lastSubStrIndex, i), initX, initY);
            initY += lineHeight;
            lineWidth = 0;
            lastSubStrIndex = i;
          }
          if (i == str.length - 1) {
            ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, initY);
          }
        }
      }

      draw_line(data1)
      draw_line(data2)
      drawText('净利润', 14, 90, cxt)
      drawText('经营活动现金流净额', 6, 150, cxt)
      cxt.beginPath()
      cxt.closePath()
      cxt.stroke()
    }
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
    /*background: #ccc;*/
  }

  .head {
    width: 100%;
    height: 81px;
    /*background: #0cc;*/
  }

  .report {
    width: 50%;
    height: 100%;
    float: left;
    /*background: #c00;*/
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
    /*background: #00f;*/
  }

  .profit_diff {
    float: left;
    width: 50%;
    height: 100%;
    /*background: #000;*/
    position: relative;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border: 1px solid #cbcbcb;

  }

  .report_chart {
    width: 50%;
    float: right;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #cbcbcb;

    /*background: #ccc;*/
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
    /*background: #d0021b;*/
  }

  .invest {
    top: 80px;
    left: 146px;
    background: #7ed321;
  }

  .financing {
    top: 140px;
    left: 176px;
    background: #d0021b;
  }

  .profit_diff p {
    font-size: 12px;
    background: #d8d8d8;
    border-radius: 6px;
    width: 40%;
    text-align: left;
    text-indent: 4px;
  }

  #notes {
    position: absolute;
    left: 169px;
    top: 158px;
    border: 1px solid #cbcbcb;

  }
  #notes .note_item{
    font-weight: 400;
    margin: 0;
    width: 174px;
    padding: 0;
    border-radius: 0;
   background: #fff;
  }
</style>
