
<template>
  <jui-header title="layer" back></jui-header>
  <div class="page-layer">
    <nav class="list">
        <a v-for="item in list" @click="layerFn($index)">{{item.title}}</a>
    </nav>
  </div>      
</template>
<style lang="sass">
 .page-layer{
    padding-top:10px;
     .list{
        padding:10px;
        background-color:#fff;
        color:#323232;
    a{
        display: block;
        line-height:40px;
        text-align: center;
        border:1px solid #ccc;
        margin-bottom: 10px;
        background-color:#f1f1f1;
        border-radius: 4px;
    } 
  }
}  
</style>
<script>
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
              this.$layer("我的天哪，好帅的作者!")
              break;
              case 1:
              this.$layer.alert('这是一个美丽妖娆的弹窗,你觉得呢？',function(){
              console.log("这是确认之后的回调函数")
              });
              break;
              case 2:
              this.$layer.loading(1);
              break;
              case 3:
              this.$layer.confirm("这是一个美丽的弹窗<br>你觉得呢？",function(){
                this.$layer("这是确认之后的回调函数!")
              },function(){
                this.$layer("这是取消之后的回调函数!")
              });
              break;
            }
          }
        }
    }
</script>