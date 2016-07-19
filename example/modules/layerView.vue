
<template>
    <nav class="list">
        <a v-for="item in list" @click="layerFn($index)">{{item.title}}</a>
      </nav>
    <Layer></Layer>
      
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
    import layer from '../../src/components/layer/index.js';  
    //es6
    export default {
         data () {
            return {
                list:[
                {title:'message',link:'/layer'},
                {title:'alert',link:'/shuffling'},
                {title:'loading',link:'/shuffling'},
                {title:'confirm',link:'/shuffling'},
                ]
            }
        },
        methods:{
          layerFn(index){
            console.log(index)
            switch(index){
              case 0:
              break;
              case 1:
              layer.alert('这是一个美丽妖娆的弹窗,你觉得呢？',function(){
              console.log("这是成功之后的回调函数")
              });
              break;
              case 2:
              layer.loading('这是一个美丽妖娆的弹窗,你觉得呢？',function(){
              console.log("这是成功之后的回调函数")
              });
              break;
              case 3:
              break;
            }
          }
        }
    }
</script>