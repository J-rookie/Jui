
<template>
      <div class="page-home">
      <div class="page-home-header">
        <img src="../temp/images/logo.png">
        <div class="page-home-title">Vue常用组件&nbsp; 1.0.0</div>
      </div> 
      <jui-grids :options="options" :cols="3" ></jui-grids>
      </div>
</template>
<style lang="sass">
.page-home{
  width: 100%;
  height: 100%;
  overflow: auto;
  .page-home-header{
    background-color: #419EFE;
    img{
      display: block;
      margin: auto;
      width: 66%;
    }
    .page-home-title{
      text-align: center;
      color: #fff;
      line-height: 40px;
    }
  }
}

</style>
<script>
    //es6
    export default {
         //data:function(){}，下面是es6写法
         data () {
            return {
                options:[ {title:'layer',link:'#/layer'},
                          {title:'toast',link:'#/toast'},
                          {title:'swipe',link:'#/swipe'},
                          {title:'search',link:'#/search'},
                          {title:'select',link:'#/select'},
                          {title:'picker',link:'#/picker'},
                          {title:'header',link:'#/header'},
                          {title:'cell',link:'#/cell'},
                          {title:'grids',link:'#/checklist'},
                          {title:'switch',link:'#/switch'},
                          {title:'radio',link:'#/radio'},
                          {title:'checklist',link:'#/checklist'},
                          ]
            }
        }
    }
</script>