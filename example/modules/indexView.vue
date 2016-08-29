
<template>
      <div class="page-home">
      <div class="page-home-header">
        <img src="../temp/images/logo.png">
        <div class="page-home-title">Vue常用组件&nbsp; V1.0.0</div>
      </div> 
      <jui-grids :options="options" :cols="3" border></jui-grids>
      </div>
</template>
<style lang="sass">
.page-home{
  width: 100%;
  height: 100%;
  overflow: auto;
  .page-home-header{
    background-color: #419EFE;
    margin-bottom:20px;
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
                options:[ {title:'layer',link:'#/layer',image:'./example/temp/images/layer.png'},
                          {title:'toast',link:'#/toast',image:'./example/temp/images/toast.png'},
                          {title:'swipe',link:'#/swipe',image:'./example/temp/images/swipe.png'},
                          {title:'search',link:'#/search',image:'./example/temp/images/search.png'},
                          {title:'actionSheet',link:'#/actionSheet',image:'./example/temp/images/actionSheet.png'},
                          {title:'picker',link:'#/picker',image:'./example/temp/images/picker.png'},
                          {title:'header',link:'#/header',image:'./example/temp/images/header.png'},
                          {title:'cell',link:'#/cell',image:'./example/temp/images/cell.png'},
                          {title:'grids',link:'#/grids',image:'./example/temp/images/grids.png'},
                          {title:'switch',link:'#/switch',image:'./example/temp/images/switch.png'},
                          {title:'radio',link:'#/radio',image:'./example/temp/images/radio.png'},
                          {title:'checklist',link:'#/checklist',image:'./example/temp/images/checklist.png'},
                          ]
            }
        }
    }
</script>