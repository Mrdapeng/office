<template>
  <div class="officeDetail">
    <ul class="tab">
      <li>
        <router-link to="/tab/appraisement">估值</router-link>
      </li>
      <li>
        <router-link to="/tab/assetsliabilities">利润表</router-link>
      </li>
      <li>
        <router-link to="/tab/debt">资产负债表</router-link>
      </li>
      <li>
        <router-link to="/tab/cash">现金流量表</router-link>
      </li>
      <li>
        <router-link to="/tab/income">财务分析</router-link>
      </li>
    </ul>
    <router-view style="min-height: 244px;"></router-view>

  </div>

</template>
<script>
  export default{
    data(){
      return {}
    },
    methods: {}
  }

</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  a {
    color: #4c4c4c;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .officeDetail {
    margin: 0 auto;
    width: 704px;
    overflow: hidden;
    /*background: rgba(11, 22, 12, 0.3);*/
  }

  .tab {
    width: 100%;
    padding: 0;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    border-bottom: 1px solid #000;
    background: #f0f0f0;
  }

  .tab li {
    width: 20%;
    text-align: center;
    white-space: normal;
    float: left;
  }

  .tab li a.router-link-active {
    position: relative;
  }

  .tab li a.router-link-active:after {
    content: "";
    position: absolute;
    top: 21px;
    width: 60px;
    height: 2px;
    left: 50%;
    margin-left: -30px;
    background: #979797;

  }

</style>
