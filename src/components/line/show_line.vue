<template>
  <div class="main">
    <div class="line"></div>
    <div class="item ps" :style="{left:ps_left}">
      <p>PS估值</p>
      <p class="p_">{{ps_value}}</p>
      <span class="ps_num ps"></span>
    </div>

    <div class="item pe" :style="{left:pe_left}">
      <p>PE估值</p>
      <p class="p_">{{pe_value}}</p>
      <span class="pe_num"></span>
    </div>

    <div class="item" :style="{left:pb_left}">
      <p>PB估值</p>
      <p class="p_">{{pb_value}}</p>
      <span class="pb_num pb"></span>
    </div>
    <div class="right_price" :style="{left:right_ps}">
      <p>&#8593</p>
      <!--<p class="arrow"></p>-->
      <span>当前价:{{right_price}}</span>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        ps_value: 12,
        pb_value: 13,
        pe_value: 14,
        ps_left: 30 + 'px',
        pe_left: 200 + 'px',
        pb_left: 80 + 'px',
        right_price: 12,
      }
    },
    methods: {},
    computed: {
      right_ps(){
        return this.right_price + 80 + "px";
      }
    }
  }
</script>
<style scoped>
  .arrow {
    position: relative;
    width: 0;
    height: 0;
    border: 9px solid #1abc9c;
    border-right-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
  }

  .arrow:after {
    content: '\00a0';
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid #fff;
    right: -10px;
    top: -1px;
    border-right-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
  }

  .main {
    height: 100%;
    width: 100%;
    background: #fff;
    position: relative;
  }

  .right_price {
    position: absolute;
    top: 89px;
    text-align: center;
    font-size: 0.5em;
  }

  .right_price p {
    font-size: 3em;
    margin-bottom: 0;
  }

  .p_ {
    margin-top: 6px;
    margin-bottom: 10px;
  }

  .line {
    position: relative;
    top: 50%;
    left: 50%;
    margin-left: -144px;
    margin-top: -1px;
    width: 288px;
    height: 2px;
    background: #ccc;
  }

  .main_line span {
    display: inline-block;
  }

  .item {
    width: 48px;
    height: 36px;
    top: 42px;
    font-size: 0.5em;
    text-align: center;
    position: absolute;
  }

  .item span {
    left: 50%;
    margin-left: -10px;
  }

  .ps_num {
    position: absolute;
    width: 0;
    height: 0;
    /*left: 30px;*/
    border-top: 10px solid #dbf0b7;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  .pe_num {
    width: 0;
    height: 0;
    /*left: 50px;*/
    position: absolute;
    border-top: 10px solid #dbf0b7;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  .pb_num {
    width: 0;
    height: 0;
    /*left: 80px;*/
    position: absolute;
    border-top: 10px solid #ffcccc;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

  }

</style>
