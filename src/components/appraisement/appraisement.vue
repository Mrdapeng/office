<template>
<div class="title">
  <div class="report">
  <span>报告期:</span><span class="year">{{year}}</span>
</div>
</div>

</template>
<script>
    export default{
        data(){
            return {
                year:'2016年—季报'
            }
        },
        methods: {}
    }

</script>
<style scoped>

.title{
  width: 705px;
  height: 57px;
  text-align: left;
  background: #fff;
  overflow: hidden;
}
  .report{
    font-size: 12px;
    width: 123px;
    margin-top: 26px;
  }
.report:first-child{
  margin-left: 4px;
}
  .year{
    margin-left: 8px;
  }
</style>
