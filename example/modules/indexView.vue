
<template>
      <div class="page-home">
      <div class="page-home-header">
        <div class="page-home-title">
          Vue移动端常用组件&nbsp;V1.0.0
          <span class="notes">(请在mobile查看,部分功能不支持PC)</span>
        </div>
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
    position: relative;
    margin-bottom:20px;
    background:url(../temp/images/logo.png) no-repeat top center  #419EFE;
    background-size: auto 90%;
    padding-bottom:80%;
    .page-home-title{
      text-align: center;
      color: #fff;
      position: absolute;
      bottom:0;
      left:0;
      width:100%;
      font-size:14px;
      line-height:40px;
      .notes{
          display: none;
      }
    }
  }
}
@media screen and (min-width:640px){
  .page-home{
      .page-home-header{
           padding-bottom:20%;
            .page-home-title{
                .notes{
                display: inline;
                }
            }
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
                options:[ {title:'layer',links:'#/layer',image:'./example/temp/images/layer.png'},
                          {title:'toast',links:'#/toast',image:'./example/temp/images/toast.png'},
                          {title:'swipe',links:'#/swipe',image:'./example/temp/images/swipe.png'},
                          {title:'search',links:'#/search',image:'./example/temp/images/search.png'},
                          {title:'actionSheet',links:'#/actionSheet',image:'./example/temp/images/actionSheet.png'},
                          {title:'picker',links:'#/picker',image:'./example/temp/images/picker.png'},
                          {title:'header',links:'#/header',image:'./example/temp/images/header.png'},
                          {title:'cell',links:'#/cell',image:'./example/temp/images/cell.png'},
                          {title:'grids',links:'#/grids',image:'./example/temp/images/grids.png'},
                          {title:'switch',links:'#/switch',image:'./example/temp/images/switch.png'},
                          {title:'radio',links:'#/radio',image:'./example/temp/images/radio.png'},
                          {title:'checklist',links:'#/checklist',image:'./example/temp/images/checklist.png'},
                          ]
            }
        }
    }
</script>