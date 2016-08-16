
<template>
      <picker-date :datevalues.sync="datevalues"></picker-date>
      <picker-city></picker-city>   
</template>
<style lang="sass">
</style>
<script>
  import Vue from 'vue'; 
  import pickerDate from '../../src/components/picker/pickerDate.vue';
  import pickerCity from '../../src/components/picker/pickerCity.vue';
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
                default:'选择日期吧',
              },
            }
        },
        components: {
            pickerDate:pickerDate,
            pickerCity:pickerCity,
        },
        methods:{
          aaa(){
            console.log(JSON.stringify(this.datevalues))
          }
        }
    }
</script>