<template>
  <div>

    <div class="title">
      <div class="report">
        <span>报告期:</span><span class="year">{{year}}</span>
      </div>
    </div>
    <div class="detail">
      <div class="pe item">

        <ul class="detail_list">
          <li>PE法</li>
          <li>公司PE</li>
          <li>行业PE</li>
          <li>每股收益</li>
          <li>行业水平对应估值</li>
        </ul>


      </div>
      <div class="pb item">
        <el-table>
        </el-table>
      </div>
      <div class="ps item"></div>
    </div>


  </div>


</template>
<script>
  export default{
    components: {
      ElTableHeader,
      ElTable},
    data(){
      return {
        year: '2016年—季报'
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

  ul {
    list-style: none;
  }

  .title {
    width: 705px;
    height: 58px;
    text-align: left;
    background: #fff;
    overflow: hidden;
    white-space: nowrap;
  }

  .item {
    width: 340px;
    height: 73px;
    background: #eee;

  }

  .report {
    font-size: 12px;
    width: 123px;
    margin-top: 26px;
  }

  .report:first-child {
    margin-left: 4px;
  }

  .year {
    margin-left: 8px;
  }

  .detail {
    width: 705px;
    height: 242px;
    box-sizing: content-box;
    border: 1px solid #979797;
    overflow: hidden;
    padding-top: 28px;
    background: #000;
    margin-bottom: 14px;
  }

  .detail .item {
    height: 69px;
    background: #ccc;
    border-bottom: 1px solid #eaeaea;
  }

  .detail_list {
    float: left;
  }

  .detail_list li {
    float: left;
  }


</style>
