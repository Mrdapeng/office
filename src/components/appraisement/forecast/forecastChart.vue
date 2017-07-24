<template>
  <canvas id="canvas">

  </canvas>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          {x: 28, y: 100}, {x: 40, y: 40}, {x: 60, y: 85}, {x: 80, y: 110}, {x: 100, y: 130}, {x: 120, y: 100}, {
            x: 208,
            y: 107
          },
        ],
        data2: [
          {x: 28, y: 120}, {x: 40, y: 60}, {x: 62, y: 105}, {x: 82, y: 130}, {x: 106, y: 150}, {x: 128, y: 130}, {
            x: 208,
            y: 127
          },
        ],
        mainData: [

          {x: 28, y: 105}, {x: 40, y: 68}, {x: 62, y: 95}, {x: 82, y: 110}, {x: 106, y: 120}, {x: 128, y: 110}, {
            x: 208,
            y: 117
          },

        ]

      }
    },
    mounted() {
      var canvas = document.getElementById('canvas')
      var context = canvas.getContext('2d')
      canvas.height = 241
      canvas.width = 328
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
    },
    methods: {
      drawCoordinate(cxt) {
        cxt.moveTo(28, 208)
        cxt.lineTo(28, 20)
        cxt.moveTo(28, 208)
        cxt.lineTo(223, 208)
        cxt.fillStyle='#000'
        for (let i = 0; i <12; i++) {
          cxt.rect(28+i*17,204,1,3)
        }
        cxt.strokeStyle = '#000'
        cxt.fill()
        cxt.stroke()


      },
      drawline(cxt, data, color, isfill) {
        if (isfill) {
          cxt.beginPath()
          cxt.moveTo(28, 100)
          cxt.lineTo(28, 120)
          cxt.moveTo(28, 100)
          for (let i = 1; i < data.length; i++) {
            cxt.lineTo(data[i].x, data[i].y)
          }
          cxt.closePath()
          cxt.fillStyle = color
          cxt.fill()
        }else {
          cxt.beginPath()
          for (let i = 1; i < data.length; i++) {
            cxt.moveTo(data[i-1].x,data[i-1].y);
            cxt.lineTo(data[i].x,data[i].y)

          }
          cxt.closePath()
          cxt.stroke()
        }
      },
      drawText(cxt, txt, x, y) {
        cxt.font = '10px'
        cxt.fillStyle = '#b3b3b3'
        cxt.fillText(txt, x, y)
        console.log(cxt.font)
      },
      render: function () {
        var finalData = this.data.concat(this.data2.reverse())
        var canvas = document.getElementById('canvas')
        var context = canvas.getContext('2d')
        var tempArr = this.data.map(function (value,) {
          return value.y
        }, tempArr)
        var maxHeight = Math.min(tempArr)
        this.drawCoordinate(context)
        this.drawline(context, finalData, '#fce0b3', true)
        this.drawline(context, this.mainData, '#fce0b3',false)
        this.drawText(context, '估值上限', 100, 50)
        this.drawText(context, '估值下限', 100, 180)
      }
    }
  }
</script>
<style>

</style>
