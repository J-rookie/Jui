
<template>
      <picker :data="city"></picker>    
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
                city:{
                  name:"日期选择",
                  years:[1990,1991,1992,1993,1994,1995]
                }
            }
        },
        components: {
            picker:picker,
        },
    }
</script>