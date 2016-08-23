
<template>
    <nav class="list">
        <a v-for="item in list" @click="layerFn($index)">{{item.title}}</a>
      </nav>      
</template>
<style lang="sass">
 .list{
  background-color:#fff;
  color:#323232;
  a{
    display: block;
    line-height:30px;
  }
}   
</style>
<script>
    import Vue from 'vue';
    import layer from '../../src/JsComponents/layer/index.js';  
    //es6
    export default {
         data () {
            return {
                list:[
                {title:'message'},
                {title:'alert'},
                {title:'loading'},
                {title:'confirm'},
                ]
            }
        },
        methods:{
          layerFn(index){
            switch(index){
              case 0:
              layer("我的天哪，好帅的作者!")
              break;
              case 1:
              layer.alert('这是一个美丽妖娆的弹窗,你觉得呢？',function(){
              console.log("这是确认之后的回调函数")
              });
              break;
              case 2:
              layer.loading(2,5000);
              break;
              case 3:
              layer.confirm("这是一个美丽的弹窗<br>你觉得呢？",function(){
                layer("这是确认之后的回调函数!")
              },function(){
                layer("这是取消之后的回调函数!")
              });
              break;
            }
          }
        }
    }
</script>