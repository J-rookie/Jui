
<template>
      <picker :data="datetime.slot" :default="datetime.default" :response.sync='datetime.response'></picker>   
</template>
<style lang="sass">
.menu{
  a{
    display: block;
    line-height:40px;
    text-align: center;
    color:#999;
    text-decoration:none;
    border-bottom:1px solid #ccc;
  }
}
</style>
<script>
  import Vue from 'vue'; 
  import picker from '../../src/components/picker/picker.vue';
    //es6
    export default {
         //data:function(){}，下面是es6写法
         data () {
            return {
                datetime:{
                  slot:{
                    '0':{
                      values:[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001],
                      value:'1990'
                    },
                    '1':{
                      values:[1,2,3,4,5,6],
                      value:'1'
                    },
                    '2':{
                      values:[1,2,3,4,5,6],
                      value:'1'
                    },
                    length:3,
                  },
                  default:"日期选择",
                  response:'',
                }
            }
        },
        components: {
            picker:picker,
        },
        ready(){
          
        },
        methods:{
          aaaa(){
            console.log()
          },
        }
    }
</script>