
<template>
      <jui-picker-date :datevalues.sync="datevalues"></jui-picker-date>
      <jui-picker-city style-class="blueSelect" :cityvalues.sync="cityvalues"></jui-picker-city> 
      <jui-picker :data.sync="selectDate.slot" :default="selectDate.default" :response.sync="selectDate.response"></jui-picker> 
      <jui-picker style-class="blueSelect" :data.sync="selectDate.slot" :default="selectDate.default" :response.sync="selectDate.response"></jui-picker> 
</template>
<style lang="sass">
.blueSelect{
    border:1px solid #ccc;
    background-color:#419EFE;
    border-radius:4px;
    text-align: center;
    line-height:40px;
    height:40px;
    font-size:14px;
    color:#fff;
}
</style>
<script>
    //es6
    export default {
         //data:function(){}，下面是es6写法
         data () {
            return {
              datevalues:{
                data:{
                    values:[],
                    value:'',
                },
                default:'选择日期',
              },
              cityvalues:{
                data:{
                    values:[],
                    value:'',
                },
                default:'城市选择',
              },
              selectDate:{
                slot:{
                  '0':{
                    values:['美丽的选项一','美丽的选项二','淫荡的选项三','机制的选项四'],
                    value:'美丽的选项一',
                  },
                  length:1,
                },
                default:'选择题',
                response:'',
              }
            }
        },
    }
</script>