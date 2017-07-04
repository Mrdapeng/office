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
  height: 54px;
  text-align: left;
  margin-left: 6px;
}
  .report{
    font-size: 12px;
    margin-top: 23px;
    width: 123px;
  }
  .year{
    margin-left: 8px;
  }
</style>
